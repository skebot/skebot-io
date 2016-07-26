'use strict';

angular.module('skebotIoApp.auth', ['skebotIoApp.constants', 'skebotIoApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
