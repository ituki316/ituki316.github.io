// scroll header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

//header menu block none
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    }
});

// scroll speed locationS
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

// bubbles　animation
$(function() {
    var bArray = [];
    var sArray = [6, 8, 12, 14];

    // width are bubbles
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }
    // random Math
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // .individual-bubbles plus css
    setInterval(function() {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');

        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 3000, function() {
            $(this).remove()
        });


    }, 350);

});

// word change
const txts = $('.text');
let txtIndex = -1;
txts.hide()

function showNextTxt() {
    txtIndex++;
    txts.eq(txtIndex % txts.length).fadeIn(1000).delay(3000).fadeOut(1000, showNextTxt);
}

showNextTxt();