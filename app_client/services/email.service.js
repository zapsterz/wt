

  function email ($http, $window) {

    var sendemail = function(formdata){
          var poststring = '/api/email';

    
          return $http.post(poststring, formdata);
    }

    return {
      sendemail: sendemail
    };
  }


  angular
    .module('wt')
    .service('email', email);
