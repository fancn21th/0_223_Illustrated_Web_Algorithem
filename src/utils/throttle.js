export function throttle(func, interval = 200) {
  let readyToExecute = true;
  return function () {
    const later = () => {
      readyToExecute = true;
    };
    // 保持原函数的 上下文与参数
    const context = this,
      args = arguments;
    if (readyToExecute) {
      readyToExecute = false;
      func.apply(context, args);
      setTimeout(later, interval);
    }
  };
}
