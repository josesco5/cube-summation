import Cube from './cube';

export const main = {
  template: require('./main.html'),
  controller() {
    this.testCases = '';
    this.results = [];

    this.canSubmit = function () {
      return this.testCases;
    };

    this.submit = function () {
      const lines = this.testCases.split('\n');
      this.results = [];

      this.processTestCases(lines);
    };

    this.processTestCases = function (lines) {
      const testCasesTotal = this.toInt(lines[0]);
      let currentLineIndex = 0;

      for (let i = 0; i < testCasesTotal; i++) {
        currentLineIndex++;

        // Get cube size and operations total
        let size = 0;
        let opTotal = 0;
        [size, opTotal] = lines[currentLineIndex].split(' ').map(this.toInt);

        const cube = new Cube(size);

        for (let j = 0; j < opTotal; j++) {
          currentLineIndex++;
          this.processOperation(cube, lines[currentLineIndex]);
        }
      }
    };

    this.processOperation = function (cube, operStr) {
      if (operStr.startsWith('UPDATE')) {
        this.processUpdate(cube, operStr);
      } else if (operStr.startsWith('QUERY')) {
        this.processQuery(cube, operStr);
      }
    };

    this.processUpdate = function (cube, operStr) {
      const arr = operStr.split(' ');
      const x = this.toInt(arr[1]) - 1;
      const y = this.toInt(arr[2]) - 1;
      const z = this.toInt(arr[3]) - 1;
      const value = this.toInt(arr[4]);

      cube.update(x, y, z, value);
    };

    this.processQuery = function (cube, operStr) {
      const arr = operStr.split(' ');
      const x1 = this.toInt(arr[1]) - 1;
      const y1 = this.toInt(arr[2]) - 1;
      const z1 = this.toInt(arr[3]) - 1;
      const x2 = this.toInt(arr[4]) - 1;
      const y2 = this.toInt(arr[5]) - 1;
      const z2 = this.toInt(arr[6]) - 1;

      const queryResult = cube.query(x1, y1, z1, x2, y2, z2);
      this.results.push(queryResult);
    };

    this.toInt = function (str) {
      return parseInt(str, 10);
    };
  }
};
