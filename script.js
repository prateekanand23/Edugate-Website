$(document).ready(function() {
    // Animate scroll to sections
    $('nav a').click(function(event) {
        event.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    // Slide effect for courses section
    $('.course').hover(function() {
        $(this).animate({ marginTop: '-10px' }, 200);
    }, function() {
        $(this).animate({ marginTop: '0px' }, 200);
    });
});
