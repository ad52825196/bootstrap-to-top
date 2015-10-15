// change the visibility of to-top automatically
$(window).scroll(function() {
    var scrollt = document.documentElement.scrollTop;
    if (scrollt > 100) {
        $('#to-top').removeClass('hidden');
    } else {
        $('#to-top').addClass('hidden');
    }
});

// how far to scroll down before to-top comes into view
$('#to-top').affix({
    offset: {
        top: 100
    }
});
