(function($) {
    "use strict";

    jQuery(document).ready(function($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();



        /* ---- Hamburger Menu ---- */
        $(".menu-bars, .menu-close").on("click", function() {
            if ($(".hamburger-menu").width() == 0) {
                $(".hamburger-menu").css({
                    "width": "100%"
                });
                $(".menu-bars").css({
                    "visibility": "hidden"
                });
                $(".menu-close").css({
                    "right": "5%"
                });
                $(".menu-close").fadeIn();
            } else {
                $(".hamburger-menu").css({
                    "width": "0"
                });
                $(".menu-close").fadeOut();
                $(".menu-bars").css({
                    "visibility": "visible"
                });
            }
        });
        $('.hamburger-menu ul li a').click(function() {
            $(".menu-close").fadeOut();
            $(".menu-bars").css({
                "visibility": "visible"
            });
            $(".hamburger-menu").css({
                "width": "0"
            });
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1300);
            return false;
        });


        /* ---- Testimonial Area Slider ---- */
        $('.testimonial-slider').owlCarousel({
            items: 1,
            navs: false,
            loop: true,
            autoplay: true,

        });

        /* ---- Jquery Scroll Top ---- */
        $(window).scroll(function() {
            if ($(this).scrollTop() > 600) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });
        $('.scroll-top ').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        /* ---- particles.js config ---- */

        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 300
                    }
                },
                "color": {
                    "value": "#FF2B49"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });


        /* ---- stats.js config ---- */

        var count_particles, stats, update;
        stats = new Stats;
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
        count_particles = document.querySelector('.js-count-particles');
        update = function() {
            stats.begin();
            stats.end();
            if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
            }
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    });

    /* ---- Mixitup Area ---- */
    $('.mixitup_content').mixItUp({
        animation: {
            duration: 300,
        }
    });

    /* ---- Photo Gallery ---- */
    $(".portfolio-hover").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        },
        closeBtnInside: false,
        closeOnContentClick: true,
        preloader: true,
        tLoading: "",
    });

    /* ---- wow js Animation ---- */
    var wow = new WOW({
        mobile: false,
    });
    wow.init();

    $(document).on("scroll mousedown DOMMouseScroll mousewheel keydown", function(e) {
        if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel") {
            $('html, body').stop();
        }
    });

    jQuery(window).load(function() {
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    });


}(jQuery));