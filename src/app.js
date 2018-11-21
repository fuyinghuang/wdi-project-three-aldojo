import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-flash-alert';
import 'angular-flash-alert/dist/angular-flash.min.css';
import Router from './config/router';
import mainCtrl from './controllers/mainCtrl';
import 'satellizer';
import 'bulma';
import './style/main.scss';


angular.module('Aldojo', ['ui.router', 'satellizer'])
  .config(Router)
  .controller('mainCtrl', mainCtrl)
  .config(function($authProvider){
    $authProvider.signupUrl = '/api/register';
    $authProvider.loginUrl = '/api/login';
  });
