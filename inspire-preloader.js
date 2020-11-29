$(window).on('load', function(){
    $preloader=$('.preloader'),
    $loader=$preloader.find('.load');
    $loader.fadeOut();
    $preloader.delay(400).fadeOut('slow');
});