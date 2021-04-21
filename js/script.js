$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.menu').css('background', 'transparent');
    } else{
        $('.menu').css('background', 'rgba(0, 0, 0, 0.2)');
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

// nav-dots
document.addEventListener("DOMContentLoaded", function(){		
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#main_nav',
    })

    document.querySelectorAll('.scrollto').forEach(function(element){
        element.addEventListener('click', function(e) {
            e.preventDefault();
            var section_name = element.getAttribute('href');
            var offset_num = document.querySelector(section_name).offsetTop;
              window.scrollTo({ top:(offset_num - 0), behavior:'smooth' });
        });
    })
}); 