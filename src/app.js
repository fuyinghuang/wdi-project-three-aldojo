import angular from 'angular';
import '@uirouter/angularjs';
import Router from './config/router';
import mainCtrl from './controllers/mainCtrl';
import 'satellizer';




angular.module('Aldojo', ['ui.router', 'satellizer'])
  .config(Router)
  .controller('mainCtrl', mainCtrl)
  .config(function($authProvider){
    $authProvider.signupUrl = '/api/register';
    $authProvider.loginUrl = '/api/login';
  });
