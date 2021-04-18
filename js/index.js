if (window.outerWidth < 600) {
    $(function () {
        let trigger = $('#hamburger');
        let isClosed = true;
        
        trigger.on("load", function() {
            burgerTime();
        })

        trigger.on("click", function () {
            burgerTime();
        });
        
        function burgerTime() {
            if (isClosed == true) {
                trigger.removeClass('is-open');
                trigger.addClass('is-closed');
                isClosed = false;
                $('#respMenu').toggle();
            } else {
                trigger.removeClass('is-closed');
                trigger.addClass('is-open');
                isClosed = true;
                $('#respMenu').toggle();
            }
        }
    })
}