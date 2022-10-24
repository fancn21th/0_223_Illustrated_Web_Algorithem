export function debounce(func, interval = 1000) {
  let timeout;
  return function () {
    // 保持原函数的 上下文与参数
    const context = this,
      args = arguments;

    // 包装原函数
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };

    // 取消定时器
    clearTimeout(timeout);

    // 延时单位时间执行
    timeout = setTimeout(later, interval);
  };
}
