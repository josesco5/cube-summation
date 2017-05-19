import angular from 'angular';

import {main} from './app/main';
import 'angular-ui-router';
import routesConfig from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', main);
