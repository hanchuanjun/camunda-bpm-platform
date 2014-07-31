'use strict';


define([
  'angular',
  'moment',
  'camunda-tasklist-ui/task/directives/cam-tasklist-task',
  'camunda-tasklist-ui/task/directives/cam-tasklist-task-history',

  'camunda-tasklist-ui/utils',
  'camunda-tasklist-ui/api',
  'angular-bootstrap'
], function(
  angular,
  moment,
  taskDirective,
  taskHistoryDirective
) {

  var taskModule = angular.module('cam.tasklist.task', [
    require('camunda-tasklist-ui/utils').name,
    require('camunda-tasklist-ui/api').name,
    'ui.bootstrap',
    'cam.form',
    'angularMoment'
  ]);

  /**
   * @module cam.tasklist.task
   */

  /**
   * @memberof cam.tasklist
   */

  taskModule.directive('camTasklistTask', taskDirective);

  taskModule.directive('camTasklistTaskHistory', taskHistoryDirective);

  // // should be moved to the form module...
  // taskModule.directive('camTasklistTaskForm', [
  //   'camAPI',
  //   '$rootScope',
  //   'camUID',
  // function(
  //   camAPI,
  //   $rootScope,
  //   camUID
  // ) {
  //   return {
  //     link: function(scope) {
  //       scope.task = scope.task || $rootScope.currentTask;

  //       scope.elUID = camUID();

  //       scope.labelsWidth = 3;
  //       scope.fieldsWidth = 12 - scope.labelsWidth;

  //       // scope.$watch('currentTask', function() {
  //       scope.$on('tasklist.task.current', function() {
  //         if (
  //           !$rootScope.currentTask ||
  //           (scope.task && scope.task.id === $rootScope.currentTask.id)
  //         ) {
  //           return;
  //         }

  //         scope.task = $rootScope.currentTask;
  //         console.info('Current task is now, get the form', scope.task);
  //         // scope.fields = camTaskFormData();
  //       });
  //     },
  //     template: require('text!camunda-tasklist-ui/task/form.html')
  //   };
  // }]);

  return taskModule;
});
