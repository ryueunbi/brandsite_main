// Hero typed
    if ($('.typed01').length) {
        var typed_strings = $(".typed01").data('typed-items');
        typed_strings = typed_strings.split(',')
        new Typed('.typed01', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
        });
    }

    if ($('.typed02').length) {
        var typed_strings = $(".typed02").data('typed-items');
        typed_strings = typed_strings.split(',')
        new Typed('.typed02', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
        });
    }

    if ($('.typed03').length) {
        var typed_strings = $(".typed03").data('typed-items');
        typed_strings = typed_strings.split(',')
        new Typed('.typed03', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
        });
    }