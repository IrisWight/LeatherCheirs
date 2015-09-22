//   slider

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            autoplay:false,
            autoHeight:true
        },
        768:{
            items:2,
            autoWidth:true,
            nav:true
        }
    }
});

//  mobil header

$('.mobile-search').on('click', function(){
    $('.search').slideToggle('slow');
    $('.main-menu').hide('fast');
});

$('.mobile-menu').on('click', function(){
    $('.main-menu').slideToggle('slow');
    $('.search').hide('fast');
});

// sub menu

$('.open').on('click', function(){
    $('li li').slideToggle('200');
    $('.pl').fadeToggle('fast');
    $('.min').fadeToggle('fast');
});