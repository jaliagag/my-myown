$( function () {
    $('#derecha').show();
    var trigger = $('#hamburger'),
        isClosed = true;

    trigger.on("click",function () {
        burgerTime();
    });

    function burgerTime() {
        if (isClosed == true) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
            $('#derecha').hide();
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
            $('#derecha').show();
        }
    }
})