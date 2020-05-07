$(function(){
    $('.menu-toggle').click(function () {
        $(this).toggleClass('active')
        $('.menu').slideToggle(400)
    })
    //LOADER
    $(window).on('load', function () {
        var $preloader = $('#p_prldr'),
            $svg_anm = $preloader.find('.svg_anm');
        $svg_anm.fadeOut();
        $preloader.delay(500).fadeOut('slow');
    });
    //Плавный скрол
    var $page = $('html, body');
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
//active link
    $(function () {
        $('.menu a').each(function () {
            var location = window.location.href;
            var link = this.href;
            if (location == link) {
                $(this).addClass('active-menu');
            }
        });
    });
//Slider
    $('.banner__slick').each(function () {
        var $this = $(this),
            $blockArrows = $('.controls-arrows', $this),
            $blockDots = $('.controls-dots', $this),
            $slick = $('.banner__slider', $this);
        $slick.slick({
            dots: true,
            arrows: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: $blockArrows,
            appendDots: $blockDots,
            prevArrow: '<img class="slider-arrows__left" src="img/arrows-left.svg" alt="">',
            nextArrow: '<img class="slider-arrows__right" src="img/arrows-right.svg" alt="">',
        });
    });

    $('.progress__slick').slick({
        dots: false,
        arrows: true,
        appendArrows: '.arrows',
        prevArrow: '<img class="progress-arrows__left" src="img/progress/chevron-left.svg" alt="">',
        nextArrow: '<img class="progress-arrows__right" src="img/progress/chevron-right.svg" alt="">',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1460,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 460,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

//wow
    $(window).on('load', function () {
    var wow = new WOW(
        {
            boxClass: 'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
            animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
            offset: 0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
            mobile: true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
            live: true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
            callback: function (box) {
                // функция срабатывает каждый раз при старте анимации
                // аргумент box — элемент, для которого была запущена анимация
            },
            scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
        }
    );
    wow.init();
    });
 //Счетчик чисел
    /* $(function () {

        var target_block = $(".info__footer"); // Ищем блок 
        var blockStatus = true;

        $(window).scroll(function () {

            var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

            if (scrollEvent && blockStatus) {

                blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

                $({ numberValue: 0 }).animate({ numberValue: 1000 }, {

                    duration: 500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
                    easing: "linear",

                    step: function (val) {

                        $(".count").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                    }

                });

            }

        });

    }); */
//Scloll
    $('#fullpage').fullpage({
        sectionSelector: 'section',
        css3: true,
        scrollBar: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        responsiveWidth: 991,
        navigation: true,
        navigationPosition: 'right',
        scrollHorizontally: true
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);//Mousse work.
});
//---------------------------
//Magnific-popup
$(function () {
    $('.popup-link').magnificPopup({
        type: "inline",
        fixedContentPos: false,
        removalDelay: 300
    });
});


//---------------------------
var textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', function () {
    if (this.scrollTop > 0) {
        this.style.height = this.scrollHeight + "px";
    }


});

