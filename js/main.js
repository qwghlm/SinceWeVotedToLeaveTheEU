$(function() {

    $('main').addClass('loaded');

    var referendumDay = new Date(2016, 5, 23);
    var days = Math.floor((new Date().getTime() - referendumDay)/(24*3600*1000));
    $('#days-since-referendum').html(days);

    $('main').fullpage({
        sectionSelector : 'section',
        scrollingSpeed : 700,
        onLeave : function(index, nextIndex, direction) {
            if (index === $('section').length - 1) {
                $('footer').addClass('active');
            }
            else {
                $('footer').removeClass('active');
            }
        },
    });
});
