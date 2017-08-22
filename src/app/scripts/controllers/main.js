'use strict';

/**
 * @ngdoc function
 * @name bbPlayersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bbPlayersApp
 */
angular.module('bbPlayersApp')
  .controller('MainCtrl', function ($http, $scope) {

    $scope.register = function() {
      $http({
        method:'POST',
        url: 'http://localhost:3977/api/register',
        data: {
          name: $scope.name,
          surname: $scope.surname,
          email: $scope.email,
          role: 'ROLE_USER',
          password: $scope.pass,
          image:''
        }
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log(response);
      });
    };

    $scope.loginUser = function() {
      $http({
        method: 'POST',
        url: 'http://localhost:3977/api/loginUser',
        data: {
          email: $scope.mailLogin,
          password: $scope.passLogin,
          gethash: true
        }
      }).then(function successCallback(response) {
        console.log(response);
        $scope.token = response.data.token;
      }, function errorCallback(response) {
        console.log(response);
      });
    };
  });
