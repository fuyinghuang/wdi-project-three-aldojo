import angular from 'angular';
import '@uirouter/angularjs';
import Router from './config/router';





angular.module('Aldojo', ['ui.router'])
  .config(Router);
