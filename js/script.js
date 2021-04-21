$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', 'rgba(0, 0, 0, 0.2)');
    }
});

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 100){
        $('.mousey').css('border', '2px solid #fff');
        $('.scroller').css('background-color', "#fff");
    } else{
        $('.mousey').css('border', '2px solid #000');
        $('.scroller').css('background-color', "#000");
    }
});