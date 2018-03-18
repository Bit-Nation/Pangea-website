$( document ).ready(function() {
    // Open mobile menu
    $(".top-nav-icon").click(function(){
        $( "#topnav" ).toggleClass( "visible" );
        $( ".main-header" ).toggleClass( "dark-bg" );
        $( "#openmenu" ).toggleClass( "hidden" );
        $( "#closemenu" ).toggleClass( "hidden" );
        // Hide dropdown when closing main menu
        if($("#available-languages").hasClass("visible")){
            $("#available-languages").removeClass("visible")
        }
        event.preventDefault();
    });
    // Open language dropdown on mobile
    $("#active-language").click(function(){
        if($(window).width() < 930){
            $( "#available-languages" ).toggleClass( "visible" );
        }
        event.preventDefault();
    });
    $(".show-more").click(function(){
        $( ".more" ).toggleClass( "visible" );
        $( ".show-more-container" ).toggleClass( "hidden" );
    });
    // Countodwn for public sale
    $('#clock').countdown('2018/03/25', {elapse: true})
    .on('update.countdown', function(event) {
        if (event.elapsed) {
            $('#clock .announcement.sale-open').removeClass('hidden');
        } else {
            $('#clock .announcement.sale-closed').removeClass('hidden');
            $('#clock .countdown').html(event.strftime('%-n&nbsp;days %-H&nbsp;hr %M&nbsp;min %S&nbsp;sec'));
        }
    });
    // Pangea screens slides on mobile
    $('.pangea-screens').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        autoplay: true,
        responsive: [{
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 930,
            settings: {
                slidesToShow: 4,
                dots: false,
                autoplay: false,
            }
        }]
    });
    // Timeline slider 
    $('.timeline').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        centerPadding: '0',
        appendArrows: $('.slider-arrows'),
        nextArrow: '<button type="button" class="arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.43 27.43"><path d="M63.14,14.67a1.19,1.19,0,0,0,.08-.16,1,1,0,0,0,.08-.14l.06-.21a.35.35,0,0,0,0-.11,1.52,1.52,0,0,0,0-.67.35.35,0,0,0,0-.11c0-.07,0-.15-.06-.21a1,1,0,0,0-.08-.14,1.19,1.19,0,0,0-.08-.16,2,2,0,0,0-.19-.22s0,0,0,0l-12-12A1.72,1.72,0,0,0,48.5,2.93L57.57,12H1.71a1.72,1.72,0,0,0,0,3.43H57.57L48.5,24.5a1.72,1.72,0,0,0,0,2.43,1.73,1.73,0,0,0,2.43,0l12-12s0,0,0,0A2,2,0,0,0,63.14,14.67Z"/></svg></button>',
        prevArrow: '<button type="button" class="arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.43 27.43"><path d="M61.71,12H5.85l9.08-9.07A1.72,1.72,0,0,0,12.5.5l-12,12,0,0a1.92,1.92,0,0,0-.18.22l-.09.16-.07.14a1.17,1.17,0,0,0-.06.2s0,.08,0,.12a1.89,1.89,0,0,0,0,.67l0,.12c0,.06,0,.13.06.2l.07.14.09.16a1.92,1.92,0,0,0,.18.22l0,0,12,12a1.73,1.73,0,0,0,1.21.5,1.75,1.75,0,0,0,1.22-.5,1.72,1.72,0,0,0,0-2.43L5.85,15.43H61.71a1.72,1.72,0,1,0,0-3.43Z"/></svg></button>',
        responsive: [{
            breakpoint: 930,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
            }
        }]
    });
});
