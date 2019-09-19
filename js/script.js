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

    $("[data-fancybox]").fancybox();


    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    $("filters a").click(function () {
        $("filters.current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

    $("#navigation li a").click(function(event) {
		event.preventDefaults() ;

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

    });
    
    
    const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.addClass("fixedNav");
		}
		else {
			body.removeClass("fixedNav");
		}
    }

});