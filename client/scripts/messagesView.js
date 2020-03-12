var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
  },

  renderMessage: function (message) {
    let { username, text } = message;

    $(MessageView.render({ userName: username, message: text })).prependTo(MessagesView.$chats)
  }

};