(function() {

  return {
    events: {
      'app.activated':'initialize',
      'findUser.fail' : 'this.fail',
    },

    requests: {
      findUser: function(userId) {
        return {
          url: this.setting('api_url') + '/users/' + userId,
          type: 'GET',
          dataType: 'json'
        };
      }
    },

    initialize: function() {
      var userId  = this.ticket().requester().id();
      this.ajax('findUser', userId)
          .done(function(data) {
            this.switchTo('admin_link', data);
          });
    },

    fail: function(request) {
      this.switchTo('error');
    }
  };

}());
