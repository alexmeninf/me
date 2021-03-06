jQuery(function () {

  // animate 
  new WOW().init();

  // get current year
  $('.date').html(new Date().getFullYear());

  setURL = () => {
    $('a[href^="{{urlSite}}"]').each(function () {
      var oldUrl = $(this).attr("href");
      var newUrl = oldUrl.replace("{{urlSite}}", "https://alexmeninf.github.io/me/");
      $(this).attr("href", newUrl);
    });
  }

  themeMode = () => {
    $('#themeMode').click(function () {
      $("body").toggleClass('white-theme');
      
      if ($("body").hasClass("white-theme")) {
          $("meta[name=apple-mobile-web-app-status-bar-style]").attr("content", "default");
      } else {
          $("meta[name=apple-mobile-web-app-status-bar-style]").attr("content", "black");
      }
    });
  }

  titleAnimate = () => {
    anime.timeline({
        loop: false
      })
      .add({
        targets: '.title .line',
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700
      }).add({
        targets: '.title .line',
        duration: 600,
        easing: "easeOutExpo",
        translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
      }).add({
        targets: '.title .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
      }).add({
        targets: '.title .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
      }).add({
        targets: '.title',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }

  setURL();
  themeMode();
  titleAnimate();
});
