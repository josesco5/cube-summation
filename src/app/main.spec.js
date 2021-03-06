import angular from 'angular';
import 'angular-mocks';
import {main} from './main';

describe('hello component', () => {
  beforeEach(() => {
    angular
      .module('fountainHello', ['app/main.html'])
      .component('fountainHello', main);
    angular.mock.module('fountainHello');
  });
  it('should render hello world', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<fountain-hello>Loading...</fountain-hello>')($rootScope);
    $rootScope.$digest();
    const h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
