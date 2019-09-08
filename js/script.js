$(document).ready(function () {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["software engineer.", "web developer.", "student."],
        typeSpeed: 70,
        startDelay: 1000,
        showCursor: false,
        loop: true
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }

        }
    });



    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsSection = $(".statsSection").offset().top;
    var countUpFinished = false;

    $(window).scroll(function () {

        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });


    $(window).scroll(function () {
        if (!countUpFinished && window.pageYOffset > statsSection - $(window).height() + 200) {
            countUpFinished = true;
            $(".counter").each(function () {
                $('.counter').each(function () {
                    countUpFinished = true;
                    var $this = $(this),
                        countTo = $this.attr('data-count');

                    $({ countNum: $this.text() }).animate({
                        countNum: countTo
                    },

                        {

                            duration: 8000,
                            easing: 'linear',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                            }

                        });
                });


            });


        }
    });

});