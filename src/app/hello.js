export const hello = {
  template: require('./hello.html'),
  controller() {
    this.testCases = '';
    this.result = '';

    this.canSubmit = function () {
      return this.testCases;
    };

    this.submit = function () {
      this.result = this.testCases;
    };
  }
};
