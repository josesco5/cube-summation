import angular from 'angular';

export default class Cube {
  constructor(size) {
    this.cube = [];

    const row = new Array(size);
    row.fill(0);

    const matrix = [];
    for (let i = 0; i < size; i++) {
      matrix.push(angular.copy(row));
    }

    for (let i = 0; i < size; i++) {
      this.cube.push(angular.copy(matrix));
    }
  }

  update(x, y, z, value) {
    this.cube[z][y][x] = value;
  }

  query(x1, y1, z1, x2, y2, z2) {
    let result = 0;
    for (let i = z1; i <= z2; i++) {
      for (let j = y1; j <= y2; j++) {
        for (let k = x1; k <= x2; k++) {
          result += this.cube[i][j][k];
        }
      }
    }
    return result;
  }

  toString() {
    let str = '';
    for (const matrix of this.cube) {
      str += angular.toJson(matrix) + '\n';
    }
    return str;
  }
}
