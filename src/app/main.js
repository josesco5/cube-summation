export const main = {
  template: require('./main.html'),
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
