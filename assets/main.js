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

function showUserInfo(client, info, admin_url) {
  var source = $("#sidebar-template").html();
  var template = Handlebars.compile(source);
  info.admin_url = admin_url;
  var html = template(info);
  $("#content").html(html);

  var height = $("html").height();
  client.invoke('resize', { width: '100%', height: height });
}

function getUserInfo(client, metadata, user_id) {
  var settings = {
    url: metadata.settings.api_url + '/users/' + user_id,
    type: 'GET',
    dataType: 'json',
  };

  client.request(settings).then(
    function(data) {
      showUserInfo(client, data, metadata.settings.admin_url);
    },
    function(response) {
      $("#content").html("<p class=\"not-found\">Sorry, we couldn't find a user with this email</p>");
      var height = $("html").height();
      client.invoke('resize', { width: '100%', height: height });
    }
  );
}

