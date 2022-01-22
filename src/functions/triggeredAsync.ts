const createTriggeredAsync = <T>(action: () => Promise<T>) => {
  let resolveRef: (value: unknown) => void;
  const promise = new Promise((resolve) => {
    resolveRef = resolve;
  });

  const trigger = () => {
    action().then(resolveRef);
  };

  return { promise, trigger };
};

export default createTriggeredAsync;
