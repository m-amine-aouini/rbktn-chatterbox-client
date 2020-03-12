var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
  },

  renderRoom: function (room) {
    $(`<option value=${room}>${room}</option>`).prependTo(RoomsView.$select)
  }

};
