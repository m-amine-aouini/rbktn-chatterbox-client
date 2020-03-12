var Friends = {

    toggleStatus: function () {
        let called = false;
        let restore = function () {
            this.called = false;
        }

        return {
            called,
            restore
        }
    }


};