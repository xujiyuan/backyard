'use strict';

angular.module('backyard.version', [
  'backyard.version.interpolate-filter',
  'backyard.version.version-directive'
])

.value('version', '0.1');
