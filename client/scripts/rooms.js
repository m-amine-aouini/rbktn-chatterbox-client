var Rooms = {
    add: function () {
        let called = false;
        let restore = function () {
            Friends.madeCall = false;
        }

        return {
            called,
            restore
        }
    }

};

$(function () {
    $('#rooms button').on('click', function () {

        Rooms.add.called = true
        console.log(Rooms.add.called)
    })
})