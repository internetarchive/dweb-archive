/**
 * Executes a function no more than once within the specified time threshhold
 *
 * Pass its return value into high-frequency event listeners
 * like scroll/resize to improve performance.
 *
 * @param {Function} fn
 * @param {Number}   threshhold - in milliseconds
 * @param {*}        context    - will be bound to fn as its "this" value
 * @return {Function} the throttled version of the original function
 */
class Throttler {
  constructor(callback, threshhold = 250, context = undefined) {
    this.callback = callback;
    this.threshhold = threshhold;
    this.context = context;
    this.last = undefined;
    this.deferTimeout = undefined;
  }

  execute() {
    const now = +new Date();

    if (this.last && now < this.last + this.threshhold) {
      clearTimeout(this.deferTimeout);
      this.deferTimeout = setTimeout(this.executeCallback.bind(this), this.threshhold);
    } else {
      this.executeCallback.call(this);
    }
  }

  executeCallback() {
    this.last = +new Date();
    this.callback.apply(this.context);
  }
}

export { Throttler as default };
