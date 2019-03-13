$(function () {
    $('.chart').easyPieChart({
        lineCap: 'round',
        scaleColor: '#ffffff',
        trackColor: '#ffffff',
        barColor: '#FF694D',
        lineWidth: '10',
        size: '130',
        scaleLength: 0,
        animate: 2000
    });
    $('div.home-page-slider').fullpage({
        anchors: ['introduction', 'skills', 'awards-and-achievements', 'timeline', 'follow-me'],
        sectionSelector: 'section',
        css3: true,
        responsiveWidth: 769
    });
    $('div.contact-page-slider').fullpage({
        anchors: ['follow-me', 'contact'],
        sectionSelector: 'section',
        css3: true,
        responsiveWidth: 769
    });
    $(".testimonials").tabs({
        hide: {effect: "fade", duration: 500}
    });

    if($(window).width() >= 769){
        $("#flat").flipster({
            style: 'carousel',
            spacing: 0
        });
    }
    else{
        $("#flat").flipster({
            style: 'carousel'
        });
    }

    $('.back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

    $('.navigation_trigger a').click(function () {
        $('.navigation').stop().slideToggle('slow');
    });

    $("#myform").submit(function(){

        if(document.getElementById('name').value==''){
            alert('Please enter your name.');
            return false;
        }
        else if(document.getElementById('email').value==''){
            alert('Please enter your email address.');
            return false;
        }
        else if(document.getElementById('phone').value==''){
            alert('Please enter your phone number.');
            return false;
        }
    });

    lightbox.option({
        'maxHeight': '600'
    });

});

$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $('.back-to-top').fadeIn(200);
    } else {
        $('.back-to-top').fadeOut(200);
    }
});