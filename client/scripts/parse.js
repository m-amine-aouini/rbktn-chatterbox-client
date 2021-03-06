var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function (message, successCB, errorCB = null) {
    // todo: save a message to the server
    $.ajax({
      type: 'POST',
      url: Parse.server,
      data: JSON.stringify(message),
      success: successCB,
      error: errorCB || function (error) {
        console.log('this is a nono', error)
      },
      contentType: 'application/json'

    })
    let called = false
    return {
      called,
      restore: function () {
        Parse.create.called = false
      }
    }
  },

  readAll: function (successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};
