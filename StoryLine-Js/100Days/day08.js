var cancellable = function (fn, args, t) {
  let timeoutId;

  const executeFn = () => {
    const startTime = Date.now();
    const result = fn(...args);
    console.log({ time: Date.now() - startTime, returned: result });
  };

  timeoutId = setTimeout(executeFn, t);

  const cancelFN = () => {
    clearTimeout(timeoutId);
  };

  return cancelFN;
};

const cancelTimeMs = 200;
const cancelFN = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFN, cancelTimeMs);
