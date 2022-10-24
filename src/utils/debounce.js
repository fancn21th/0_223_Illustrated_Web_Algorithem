export function debounce(func, interval = 200) {
  let timer;
  return function () {
    // 保持原函数的 上下文与参数
    const context = this,
      args = arguments;

    // 包装原函数
    const later = function () {
      timer = null;
      func.apply(context, args);
    };

    // 取消定时器
    clearTimeout(timer);

    // 延时单位时间执行
    timer = setTimeout(later, interval);
  };
}
