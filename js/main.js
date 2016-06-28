$(function() {

    var referendumDay = new Date(2016, 5, 23);
    var days = Math.floor((new Date().getTime() - referendumDay)/(24*3600*1000));
    $('#days-since-referendum').html(days);

    $('main').fullpage({
        sectionSelector : 'section',
        scrollingSpeed : 600,
    });

})
