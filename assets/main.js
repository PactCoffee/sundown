$(function() {
  var client = ZAFClient.init();

  client.invoke('resize', { width: '100%', height: '200px' });

  client.get('ticket.requester.id').then(
    function(data) {
      var user_id = data['ticket.requester.id'];
      client.metadata().then(metadata => {
        getUserInfo(client, metadata, user_id);
      })
    }
  );
});

function showUserInfo(info, admin_url) {
  // https://pactcoffee.zendesk.com/agent/tickets/361430?zat=true
  var source = $("#sidebar-template").html();
  var template = Handlebars.compile(source);
  info.admin_url = admin_url;
  var html = template(info);
  $("#content").html(html);
}

function getUserInfo(client, metadata, user_id) {
  var settings = {
    url: metadata.settings.api_url + '/users/' + user_id,
    type: 'GET',
    dataType: 'json',
  };

  client.request(settings).then(
    function(data) {
      showUserInfo(data, metadata.settings.admin_url);
    },
    function(response) {
      $("#content").html("<p>Sorry, we couldn't find a user with this email</p>");
    }
  );
}

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
