angular.module('app', ['xml'])
.run(function($http, $rootScope, x2js) {

    $http.get('EWI.xml')
    .success(function(data) {
        var data = x2js.xml_str2json(data).root;
        $rootScope.data = data;
        $rootScope.apples = data.row[0].FIELD1;
    });

});
