// navigation resize on scroll
$(document).on('scroll', function(){
    if($(document).scrollTop()>50) {
        $('header').removeClass('large').addClass('small');
    } else {
        $('header').removeClass('small').addClass('large');
    }
});

$('.compas').on('click', function(){
    $('.menu').toggleClass('opacity');
});


$(window).scroll(function() {

var wScroll = $(this).scrollTop();

if(wScroll > $('.photos').offset().top - ($(window).height() / 1.3)) {

    $('.photos figure').each(function(i){

        setTimeout(function(){
        $('.photos figure').eq(i).addClass('showing');
        }, 100 *(i+1));
    });

}

})
