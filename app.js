(function() {

  return {
    events: {
      'app.activated':'initialize',
      'findUser.done' : 'this.success',
      'findUser.fail' : 'this.fail',
    },

    requests: {
      findUser: function(email) {
        return {
          url: this.setting('api_url') + "/v1/users",
          username: this.setting('viper_token'),
          password: "", //required for basic auth
          type: 'GET',
          dataType: 'json',
          data: {
            email: email
          }
        };
      }
    },

    initialize: function() {
      var email = this.ticket().requester().email();
      this.ajax('findUser', email);
    },

    success: function(request) {
      this.switchTo('admin_link', request.users[0]);
    },

    fail: function(request) {
      this.switchTo('admin_link', { error: true } );
    }
  };

}());
