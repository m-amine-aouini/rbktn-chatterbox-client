var MessageView = {
  onClick: function () {
    // console.log()
    Friends.toggleStatus.called = true;
    // console.log(Friends.madeCall)
  },

  render: _.template(`
      <div class="chat">
        <div class="username" onclick="MessageView.onClick()"><%- userName %></div>
        <div class="message"><%- message %></div>
      </div>`)

};