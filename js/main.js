$(document).ready(function () {

  // Animations
  new WOW().init({
    mobile: false,
  });

  // Burger menu
  $(".burger").click(function () {
    $(this).closest("body").toggleClass("active");
  });

  // MagnificPopup
  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });


  $('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop: true,
    items: 1,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true

  });

  // Scrolling
  $("a.scroll").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

  // Mail php
  $(".form1").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $(".success").addClass("visible");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
        $(".success").removeClass("visible");
        $.magnificPopup.close();
      }, 5000);
    });
    return false;
  });

  // Mail php
  $(".form2").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $(".success2").addClass("visible2");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
        $(".success2").removeClass("visible2");
        $.magnificPopup.close();
      }, 5000);
    });
    return false;
  });

  $("form").submit(function (e) {

    if (!e.target.checkValidity()) {
      console.log("I am Safari"); // Safari continues with form regardless of checkValidity being false
      e.preventDefault(); // dismiss the default functionality

      $('#form3 :input:visible[required="required"]').each(function () {
        if (!this.validity.valid) {
          $(this).focus();
          $(this).attr("placeholder", this.validationMessage).addClass('placeholderError');
          $(this).val(''); // clear value so it shows error message on Placeholder.
          return false;
        }
      });
      return; // its invalid, don't continue with submission
    }

    e.preventDefault(); // have to add it again as Chrome, Firefox will never see above
  });



  // Tabs
  $('.punkt').click(function () {
    var res = $(this).attr('res');
    $('.punkt').each(function () {
      $(this).removeClass('punkt-active');
    });
    $(this).addClass('punkt-active');


    $('.why-wrap').stop().animate(200, function () {
      $('.why-block').each(function () {
        if (!$(this).hasClass(res)) {
          $(this).css({ 'display': 'none' });
          $(this).removeClass('active');
        }
        else {
          $(this).css({ 'display': 'block' });
          $(this).addClass('active');

        }
      });
      $('.why-wrap').stop().animate(400);
    });
  });

});
