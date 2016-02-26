(function() {

  return {
    events: {
      'app.activated':'initialize',
      'findUser.done' : 'this.success',
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
      this.ajax('findUser', userId);
    },

    success: function(request) {
      this.switchTo('admin_link', request);
    },

    fail: function(request) {
      this.switchTo('error');
    }
  };

}());
