'use strict';

angular.module('backyard').factory('settings', function() {
   var defaultFilter = {
        status: 'review',
        max: 10,
        page: 1,
        filters: {},
        orders: {},
        fields: {
            campusId: { type: 'eq' },
            displayName: { type: 'like' },
            academicPlan: { type: 'starts' },
            admitTerm: { type: 'eq' },
            emplid: {type: 'eq'}
        }
   };

   var initialSettings = {
       alertDelay: 15000,
       pageTitle: 'BackYard Parking System',
       testUrl: 'https://www.google.com'
       
   };

   return {
       init: function() {
           return initialSettings;
       },
       getDefaultFilter: function() {
           return _.cloneDeep(initialSettings.defaultFilter);
       }
   };
});
