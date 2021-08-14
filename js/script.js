/* var name = "Ivan";
let number = 7;
const pi = 3.14;

number = 4 */

// number
// string
// bool - true/false
// null
// undefined - существует, но не имеет значения
/* let obj = {
    name: 'apple',
    color: 'green',
    weight: 200,
} */
// Symbol

/* console.log(number); */
/* let answer = prompt("Вам есть 18?", "");
console.log(answer); */

/* console.log(4 + "ffd"); */

/* let isChecked = true,
    isClose = true; */

/* console.log(isChecked && isClose) */

/* console.log(isChecked || isClose) */

/* if (2*4 == 8) {
    console.log('True)')
}
else {
    console.log('False(')
} */

/* let answer = confirm("Вам есть 18?");
if (answer) {
    console.log('Проходите')
} else {
    console.log('Уходи')
} */
/* 
const num = 50;

if (num < 49) {
    console.log("Неправильно")
} else if (num > 100) {
    console.log('Много')
} else {
    console.log('Верно')
} */

/* for(let i = 1; i <= 8; i++) {
    console.log(i);
} */

/* function logging(a, b) {
    console.log(a+b)
}

logging("aad", 5);

logging(7, 5); */


/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../logo/chevron-left-solid.png"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../logo/chevron-right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                    }
            }
        ],
      });
  }); */



/* const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

document.querySelector('.next').addEventListener('click', function () {
slider.goTo('next');
});


$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this)
    .index()).addClass('catalog__content_active');
});

function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });
};
toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back'); */


$(document).ready(function() {
    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        nav: true
    });
    
    document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev');
      });
    
    document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
    });
    
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this)
        .index()).addClass('catalog__content_active');
    });
    
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation',).fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order',).fadeIn('slow');
        })
    });

    
/*     $('#consultation-form').validate();
    $('#consultation form').validate({
        rules: {
            name: {
                required: true,
                minlength: 3
              },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введитие {0} символов")          
            },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свой eamil адрес",
              email: "Введенный email адрес некорректный"
            },
    }
});
    $('#order form').validate(); */
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3
                  },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введитие {0} символов")          
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свой eamil адрес",
                  email: "Введенный email адрес некорректный"
                },
        }
    });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');


    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax( {
            type: "POST",
            url: "../mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset')
        });
        return false;
    });

    // scrol
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        }
         else {
            $('.pageup').fadeOut();
        }
    });
    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });



    new WOW().init();
});