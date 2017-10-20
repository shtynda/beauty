$(function() {

    $('.slickslider').slick({
        autoplay: true,
        arrows: true,
        nextArrow: $('.next-ar'),
        prevArrow: $('.prev-ar'),
        dots: false,
        slidesToShow: 1
    });

    $('.slickslider-2').slick({
        autoplay: false,
        arrows: true,
        nextArrow: $('.rev-next'),
        prevArrow: $('.rev-prev'),
        dots: false,
        slidesToShow: 1
    });

    // Do - Posle
    $('.img-btn2').click(function () {
        $('.img-btn1').removeClass('activ');
        $(this).addClass('activ');
        var val = $(this).data("val"),
            val2 = '#img' + val,
            val3 = 'img/' + val + 'posle.png';
        $(val2).attr('src',val3).fadein();
    });
    $('.img-btn1').click(function () {
        $('.img-btn2').removeClass('activ');
        $(this).addClass('activ');
        var val = $(this).data("val"),
            val2 = '#img' + val,
            val3 = 'img/' + val + 'do.png';
        $(val2).attr('src',val3).fadeIn();
    });
    $('.rev-next,.rev-prev').on('click',function () {
        $('.img-btn2').removeClass('activ');
        $('.img-btn1').addClass('activ');
        $('#imgrev1').attr('src','img/rev1do.png');
        $('#imgrev2').attr('src','img/rev2do.png');
        $('#imgrev3').attr('src','img/rev2do.png');
    });

    //    links
    $('footer').on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 30;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    // Popup
    $('#top-btn').magnificPopup();
    $('.mnbtn').magnificPopup();

});