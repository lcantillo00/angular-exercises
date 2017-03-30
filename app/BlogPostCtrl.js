(function ()
{
    'use strict';
    function BlogPostCtrl($scope)
    {
        $scope.posts=[{
            'ID':1,
            'Author':'Jack',
            'Title':'Diving Deep with Dependency Injection'},
            {'ID':2,
            'Author':'Jill',
             'Title':'Practical End-to-End Testing with Protractor'
        }];


    }

    var module = angular.module("exerciseApp", []);
    module.controller('BlogPostCtrl',['$scope',BlogPostCtrl]);

})();
