(function ($) {
    "use strict";

    var nav = $('nav');
    var navHeight = nav.outerHeight();

    $('.navbar-toggler').on('click', function () {
        if (!$('#mainNav').hasClass('navbar-reduce')) {
            $('#mainNav').addClass('navbar-reduce');
        }
    })
    


    $(document).on('click', '.navbar-toggler', function () {
        $('body').toggleClass('overflowY-hidden')
    })



    $(document).on('click', '.onclick-myimg', function () {
        $('body').addClass('overflowY-hidden')
    })

    $(document).on('click', '.close', function () {
        $('body').removeClass('overflowY-hidden')
    })



    $(document).on('click', '.content_item_body_image-sh', function () {
        $("#bttbtn").hide()
    })

    $(document).on('click', '.close', function () {
        $("#bttbtn").show()
    })



    // Preloader
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.dc').fadeIn('slow');
        } else {
            $('.dc').fadeOut('slow');
        }
    });
    $('.dc').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });


    /*--/ Star ScrollTop /--*/
    $('.scrolltop-mf').on("click", function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    /*--/ Star Counter /--*/
    $('.counter').counterUp({
        delay: 15,
        time: 2000
    });

    /*--/ Star Scrolling nav /--*/
    var mainNav_height = $('#mainNav').outerHeight() - 22;
    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
        $('body').removeClass('overflowY-hidden')
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var scrollto = target.offset().top - mainNav_height;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    $('a[href="#"]').on("click", function (e) {
        e.preventDefault()
        $('body').removeClass('overflowY-hidden')
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var scrollto = target.offset().top - mainNav_height;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Scroll to sections on load with hash links
    if (window.location.hash) {
        var initial_nav = window.location.hash;
        if ($(initial_nav).length) {
            var scrollto_initial = $(initial_nav).offset().top - mainNav_height;
            $('html, body').animate({
                scrollTop: scrollto_initial
            }, 1000, "easeInOutExpo");
        }
    }

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll').on("click", function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: navHeight
    });
    /*--/ End Scrolling nav /--*/

    /*--/ Navbar Menu Reduce /--*/
    $(window).trigger('scroll');
    $(window).on('scroll', function () {
        var pixels = 50;
        var top = 1200;
        if ($(window).scrollTop() > pixels) {
            $('.navbar-expand-lg').addClass('navbar-reduce');
            $('.navbar-expand-lg').removeClass('navbar-trans');
        } else {
            if (!$('#navbarDefault').hasClass('show')) {
                $('.navbar-expand-lg').removeClass('navbar-reduce');
            }
            $('.navbar-expand-lg').addClass('navbar-trans');
        }
        if ($(window).scrollTop() > top) {
            $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
        } else {
            $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
        }
    });

    /*--/ Star Typed /--*/
    if ($('.text-slider').length == 1) {
        var typed_strings = $('.text-slider-items').text();
        var typed = new Typed('.text-slider', {
            strings: typed_strings.split(','),
            typeSpeed: 80,
            loop: true,
            backDelay: 1100,
            backSpeed: 30
        });
    }

    /*--/ Testimonials owl /--*/
    $('#testimonial-mf').owlCarousel({
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            }
        }
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
        $('.venobox').venobox({
            'share': false
        });
    });

})(jQuery);





// Form Border Color

class Validation {

    constructor() {
        this.validate = this.validate;
    }

    validate = () => {
        let
            name = document.getElementById('name'),
            email = document.getElementById('email'),
            subject = document.getElementById('subject'),
            message = document.getElementById('message'),
            submitBtnContact = document.getElementById('contactBtnSubmit');

        name.addEventListener('change', (e) => {
            const value = e.target.value;
            if (value.length > 1) {
                name.className = 'form-control'
            }
        });

        email.addEventListener('change', (e) => {
            const value = e.target.value;
            if (value.length > 1) {
                email.className = 'form-control'
            }
        });

        subject.addEventListener('change', (e) => {
            const value = e.target.value;
            if (value.length > 1) {
                subject.className = 'form-control'
            }
        });

        message.addEventListener('change', (e) => {
            const value = e.target.value;
            if (value.length > 1) {
                message.className = 'form-control'
            }
        });

        submitBtnContact.addEventListener('click', () => {

            if (name.value.length < 1) {
                name.className = "red form-control";
            }

            if (email.value.length < 1) {
                email.className = "red form-control";
            }

            if (subject.value.length < 1) {
                subject.className = "red form-control";
            }

            if (message.value.length < 1) {
                message.className = "red form-control";
            }
            
        });
        
    }
};

let validation = new Validation();

validation.validate();






// Lightbox Moadal

function openModal() {
    document.getElementById("myModal").style.display = "block";
}
  
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
  
var slideIndex = 1;
showSlides(slideIndex);
  
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}







$(function () {
    $('[data-toggle="tooltip"]').tooltip({ trigger: 'manual' }).tooltip('show');
});



$(window).scroll(function () {
    if ($(window).scrollTop() > 10) {  // scroll down abit and get the action   
        $(".progress-bar").each(function () {
            each_bar_width = $(this).attr('aria-valuenow');
            $(this).width(each_bar_width + '%');
        });

    }
});