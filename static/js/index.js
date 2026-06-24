window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Mobile navbar burger toggle
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // Qualitative-results carousel
    var options = {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
    }
    bulmaCarousel.attach('.carousel', options);

    // Empirical-study table tabs
    $('.study-tabs li').click(function() {
      var target = $(this).data('target');
      $('.study-tabs li').removeClass('is-active');
      $(this).addClass('is-active');
      $('.study-panel').removeClass('is-active');
      $('#' + target).addClass('is-active');
    });
})
