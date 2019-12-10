$(function() {
  var client = ZAFClient.init();

  client.get('ticket.requester.id').then(function(data) {
    console.log(data['ticket.requester.id']); // something like 29043265
  });

  client.invoke('resize', { width: '100%', height: '120px' });

  client.get('ticket.requester.id').then(
    function(data) {
      var user_id = data['ticket.requester.id'];
      console.log("PASSO AQUI!!!!!!!!!!!!!");
      // requestUserInfo(client, user_id);
    }
  );

});

/*
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
          dataType: 'json',
          cors: true,
          xhrFields: {
            withCredentials: true,
          },
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
*/
