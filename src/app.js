import angular from 'angular';
import '@uirouter/angularjs';
import Router from './config/router'; // NOTE: Don't need the .js
import './scss/main.scss';
import mainCtrl from './controllers/mainCtrl';




angular.module('Aldojo', ['ui.router'])
  .config(Router)
  .controller('mainCtrl', mainCtrl)
  .config(function($authProvider) {
    $authProvider.signupUrl = '/api/register';
    $authProvider.loginUrl = '/api/login';
  });
