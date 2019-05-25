$(function () {
    var max = $('.pictures img').length;
    $('.pictures').append("<img src='' class='acc'/>");
    var dem = 1;
    $('.btnRight').click(function(){
        var index = $(`.pictures img:nth-child(${dem})`).attr('src');
        $('.pictures img:nth-child(4)').attr({ src: index })
        if (dem === max) {
            dem = 0;
        }
        dem++;
    });
    $('.btnLeft').click(function(){
        var index = $(`.pictures img:nth-child(${dem})`).attr('src');
        $('.pictures img:nth-child(4)').attr({ src: index })

        if (dem === 1) {
            dem = max + 1;
        }
        dem--;
    });
});
