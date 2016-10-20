/**
 * Created by Joeu on 20/10/2016.
 */
angular.module('starter').factory('MoviesFac', ['$firebaseArray', function ($firebaseArray) {
    var moviesRef = new Firebase('https://ionic-fb-movies-demo.firebaseio.com');
    return $firebaseArray(moviesRef);
  }]);
