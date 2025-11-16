export default function debounce(func: Function, wait: number): Function {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (this: any, ...args: any) {
    const context = this;
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
      func.call(context, ...args);
    }, wait);
  };
}
