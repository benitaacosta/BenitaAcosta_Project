$(document).ready(function() {

    $('#btn-animate1').on('click', function() {
        $('#slideshow').hide(500);
    })

    $('#btn-animate2').on('click', function() {
        $('#slideshow').show(500);
    })

    setTimeout(function() {
        $('.phone').fadeIn(1000);
    }, 500);

    $('#btn-add').on('click', function() {
        $('article').addClass('blue');
        $('#btn-add').hide();
    })
});