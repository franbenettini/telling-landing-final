$(window).scroll(function(){
    scrollinparalax();
});

function scrollinparalax(){
    var windowwidth = $(window).width();
    var windowscroll = $(window).scrollTop();

    if (windowwidth > 750){
        if (windowscroll  > 110){
            $('.navbar-index').css('background-color','#FFFFFF');
            $('#navbar').addClass('fixed-top');
            $('#nav-bar-cta').css('background-color','#1E8BE8');
        }; 
        if (windowscroll  <= 110){
            $('.navbar-index').css('background-color','transparent')
            $('#navbar').removeClass('fixed-top');
            $('#nav-bar-cta').css('background-color','#2C3944');
        };
    };
    if (windowwidth <= 750){
        if (windowscroll  > 150){
            $('.navbar-index').css('background-color','#FFFFFF');
            $('.navbar-index').css('box-shadow','7px 0px 40px rgba(0, 0, 0, 0.199)');
            $('#navbar').addClass('fixed-top');
        };
        if (windowscroll  <= 150){
            $('.navbar-index').css('background-color','#FFFFFF');
            $('.navbar-index').css('box-shadow','none');
            $('#navbar').removeClass('fixed-top');
        };
    };
};




