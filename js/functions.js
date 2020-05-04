$(function() {

    $('.img-autor').click(function() {
        location.href = 'https://github.com/gabrielvbauer';
    });


    var fb = $('.fb');
    var ig = $('.ig');
    var tt = $('.tt');

    fb.click(function() {
        window.open('https://facebook.com/VabrielVauer', '_blank');
    });
    ig.click(function() {
        window.open('https://instagram.com/gabrielvbauer', '_blank');
    });
    tt.click(function() {
        window.open('https://twitter.com/tizuyuu', '_blank');
    });

});