$('section.slider-block .slider-list').slick({
    arrows: false,
    dots: true,
});
$('.products-list').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.status-slide').html(i + '<span class="status-sep"></span>' + slick.slideCount);
});
initCarousel('.list-1');
initCarousel('.list-2');
initCarousel('.list-3');
initCarousel('.list-4');

$(document).on("click", ".mobile_menu_container .parent", function(e) {
    e.preventDefault();
    $(".mobile_menu_container .activity").removeClass("activity");
    $(this).siblings("ul").addClass("loaded").addClass("activity");
});
$(document).on("click", ".mobile_menu_container .back", function(e) {
    e.preventDefault();
    $(".mobile_menu_container .activity").removeClass("activity");
    $(this).parent().parent().removeClass("loaded");
    $(this).parent().parent().parent().parent().addClass("activity");
});
$(document).on("click", ".mobile_menu", function(e) {
    e.preventDefault();
    $(".mobile_menu_container").addClass("loaded");
    $(".mobile_menu_overlay").fadeIn();
});
$(document).on("click", ".mobile-filter", function(e) {
    e.preventDefault();
    $(".filter-block-container").addClass("loaded");
    $(".mobile_menu_overlay").fadeIn();
});
$(document).on("click", ".mobile_menu_overlay", function(e) {
    $(".mobile_menu_container").removeClass("loaded");
    $(".filter-block-container").removeClass("loaded");
    $(this).fadeOut(function() {
        $(".mobile_menu_container .loaded").removeClass("loaded");
        $(".mobile_menu_container .activity").removeClass("activity");
        $(".filter-block-container .loaded").removeClass("loaded");
        $(".filter-block-container .activity").removeClass("activity");
    });
});

function initCarousel(name){
    $(name).slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        appendArrows: $(name +'+.slide-block'),
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 710,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
}
$('.slick__main ul').slick({
    arrows: true,
    asNavFor: '.slick__trumbs ul',
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
});

$('.slick__trumbs ul').slick({
    arrows: true,
    asNavFor: '.slick__main ul',
    dots: false,
    focusOnSelect: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    vertical: true
});