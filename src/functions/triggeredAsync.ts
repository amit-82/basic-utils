const createTriggeredAsync = <T>(action: () => Promise<T>) => {
  let resolveRef: (value: T) => void;
  const promise = new Promise<T>((resolve) => {
    resolveRef = resolve;
  });

  const trigger = () => {
    action().then(resolveRef);
  };

  return { promise, trigger };
};

export default createTriggeredAsync;
