function request(type, url, data, beforeCallback, completeCallback, successCallback, errorCallback) {
    $.ajax({
        headers: {'X-CSRF-TOKEN': window.Laravel.csrfToken},
        data: data,
        url: url,
        type: type,
        beforeSend: beforeCallback,
        complete: completeCallback,
        success: successCallback,
        error: errorCallback
    });
}

$("#notification").click(function () {
    if ($(".dropdown-notification").hasClass('hidden')) {
        $(".dropdown-notification").removeClass('hidden');
        $(".dropdown-notification").addClass('show');
    }
    else {
        $(".dropdown-notification").removeClass('show');
        $(".dropdown-notification").addClass('hidden');
    }

});

$("#profile").click(function () {
    if ($(".dropdown-user").hasClass('hidden')) {
        $(".dropdown-user").removeClass('hidden');
        $(".dropdown-user").addClass('show');
    }
    else {
        $(".dropdown-user").removeClass('show');
        $(".dropdown-user").addClass('hidden');
    }

});


$(document).click(function (e) {

    if ($(".dropdown-notification").hasClass('show')) {
        $(".dropdown-notification").removeClass('show');
        $(".dropdown-notification").addClass('hidden');
    }

    if ($(".dropdown-user").hasClass('show')) {
        $(".dropdown-user").removeClass('show');
        $(".dropdown-user").addClass('hidden');
    }

    if ($(".dropdown-laporan").hasClass('show')) {
        $(".dropdown-laporan").removeClass('show');
        $(".dropdown-laporan").addClass('hidden');
    }
});

$("#withdraw").click(function () {
    $('html').addClass('is-clipped');
    $("#withdraw_modal").addClass('is-active');
});