$(function() {
    // カルーセル
    $('.p-work_swiper_wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        // autoplay: true,
        adaptiveHeight: true,
        dots: true,

        prevArrow: '<img src="../images/Vector (3).png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="../images/bi_arrow-right-circle.png" class="slide-arrow next-arrow">',

        responsive: [{
            breakpoint: 767, // 399px以下のサイズに適用
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // autoplay: true,
                adaptiveHeight: true,
                dots: true,
                infinite: true,
            },
        }],
    });
});