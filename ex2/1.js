$(function () {
    $('.divButton li').click(function () {
        $('.divButton li').removeClass('active');
        $(this).addClass('active');
        var index = $(this).index() + 1;
        $('.divTab li').removeClass('show')
        $(`.divTab li:nth-child(${index})`).addClass('show')
    });
})
