export class Queue {
  // timestamps of last invocations (new Date().getTime()) - first is oldest
  private _invokes: number[] = [];

  // functions pending invocation
  private _que: Function[] = [];
  // cooldown in milliseconds
  private _cool: number;
  // number of functions that call be invoked in the cooldown time span
  private _cap: number;

  /**
   *
   * @param capacity number of action that can be performed without delay
   * @param cooldown milliseconds to wait since the oldest "active" action was executed
   */
  constructor(capacity: number, cooldown: number) {
    this._cool = cooldown;
    this._cap = capacity;
  }

  /**
   * attempt to invoke the next function in the que - if there is one and the capacity-timeout allows for next invokation
   * @returns boolean - invoked next function in que
   */
  private tryNext(): boolean {
    if (this._que.length === 0) {
      return false;
    }

    let canInvokeNext = false;
    if (this._invokes.length < this._cap) {
      canInvokeNext = true;
    } else if (this._invokes[0] < new Date().getTime() - this._cool) {
      // oldest has expired
      this._invokes.shift();
      canInvokeNext = true;
    }

    if (canInvokeNext) {
      this._invokes.push(new Date().getTime());
      const func = this._que.shift();
      func && func();
      setTimeout(() => {
        this.tryNext();
      }, this._cool);
    }

    return canInvokeNext;
  }

  public push(action: Function) {
    if (typeof action !== 'function') {
      throw `${action} is typeof "function"`;
    }
    this._que.push(action);
    this.tryNext();
  }

  /**
   * remove all queued function
   * @param resetCooldown - reset cooldown
   */
  public clear(resetCooldown = false) {
    this._que = [];
    if (resetCooldown) {
      this._invokes = [];
    }
  }

  set cooldown(value: number) {
    this._cool = value;
  }
  get cooldown(): number {
    return this._cool;
  }

  set capacity(value: number) {
    this._cap = value;
  }

  get capacity(): number {
    return this._cap;
  }
}

export default {
  /**
   *
   * @param capacity number of action that can be performed without delay
   * @param cooldown milliseconds to wait since the oldest "active" action was executed
   * @returns
   */
  createQueue: (capacity: number, cooldown: number) => new Queue(capacity, cooldown),
};
