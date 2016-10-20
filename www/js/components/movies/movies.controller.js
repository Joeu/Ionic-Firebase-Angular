/**
 * Created by Joeu on 20/10/2016.
 */
angular.module('starter').controller('MoviesCtrl', function ($scope, $ionicListDelegate, MoviesFac) {

  $scope.movies = MoviesFac;

  $scope.addMovie = function () {
    var title = prompt("What movie do you wanna add?");
    if (title){
      $scope.movies.$add({
        'title': title
      });
    }
  }

  $scope.delMovie = function (movie) {
    $scope.movies.$remove(movie);
  }

  $scope.viewedMovie = function (movie) {
    var movieRef = new Firebase('https://ionic-fb-movies-demo.firebaseio.com/'+movie.$id);
    movieRef.child('status').set('viewed');
    $ionicListDelegate.closeOptionButtons();
  }

})
