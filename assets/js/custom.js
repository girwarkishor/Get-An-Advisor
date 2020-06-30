// online plans
$(function () {
  function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
  }

  function isValidPhoneNumber(num) {
    var phoneno = /^\d{10}$/;
    if (num.match(phoneno)) {
      return true;
    } else {
      return false;
    }
  }

  $(".DateOfBirth").datepicker({
    dateFormat: "dd/mm/yy",
    changeMonth: !0,
    changeYear: !0,
  });

  $("#SubmitTheForm").click(function () {
    var inputs = ["Name", "MobileNumber", "EmailAddress"];

    // var RadioButtons = ["Gender", "Smoker"];

    for (var i in inputs) {
      var element = $("#" + inputs[i]);
      if (element.val() == "") {
        console.log(element.siblings(".ErrorMsg").length);
        if (element.siblings(".ErrorMsg").length == 0) {
          element.after(
            '<div class="ErrorMsg"><img src="assets/images/warning.svg">This field is required*</div>'
          );
          element.addClass("ErrorZone");
          element.change(function () {
            if ($(this).val() != "") {
              $(this).parents().children(".ErrorMsg").slideUp().remove();
              $(this).removeClass("ErrorZone");
            }
          });
        }
        element.focus();
        return false;
      }

      if (inputs[i] == "EmailAddress" && !isValidEmailAddress(element.val())) {
        if (element.siblings(".ErrorMsg").length == 0) {
          element.after(
            '<div class="ErrorMsg"><img src="assets/images/warning.svg">Please enter a valid Email Address*</div>'
          );
          element.addClass("ErrorZone");
          element.keyup(function () {
            if ($(this).val() != "") {
              $(this).parents().children(".ErrorMsg").slideUp().remove();
              $(this).removeClass("ErrorZone");
            }
          });
        }
        element.focus();
        return false;
      }

      if (inputs[i] == "MobileNumber" && !isValidPhoneNumber(element.val())) {
        if (element.siblings(".ErrorMsg").length == 0) {
          element.after(
            '<div class="ErrorMsg"><img src="assets/images/warning.svg">Please enter a valid Mobile Number*</div>'
          );
          element.addClass("ErrorZone");
          element.keyup(function () {
            if ($(this).val() != "") {
              $(this).parents().children(".ErrorMsg").slideUp().remove();
              $(this).removeClass("ErrorZone");
            }
          });
        }
        element.focus();
        return false;
      }
    }

    // for (var i in RadioButtons) {
    //   console.log($("." + RadioButtons[i] + ":checked").val());
    //   if (!$("." + RadioButtons[i] + ":checked").val()) {
    //     if (
    //       $("." + RadioButtons[i])
    //         .parents(".ItemsContainer")
    //         .children(".ErrorMsg").length == 0
    //     ) {
    //       $("." + RadioButtons[i])
    //         .parents(".ItemsContainer")
    //         .append('<div class="ErrorMsg">This field is required*</div>');
    //       $("." + RadioButtons[i])
    //         .parents("label")
    //         .click(function () {
    //           $(this).siblings(".ErrorMsg").slideUp();
    //         });
    //     }
    //     return false;
    //   }
    // }
  });

  $(window).scroll(function () {
    if ($(window).width() < 998) {
      var top = $(window).scrollTop();
      if (top > 100) {
        $(".middleMenu").addClass("sticky");
        $(".fixedmenu").addClass("sticky");
      } else {
        $(".middleMenu").removeClass("sticky");
        $(".fixedmenu").removeClass("sticky");
      }
    } else {
      $(".middleMenu").removeClass("sticky");
      $(".fixedmenu").removeClass("sticky");
    }
  });

  var owl = $(".features_slider");
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        autoplay: false,
      },
      1200: {
        items: 3,
        nav: false,
      },
      768: {
        items: 2,
        nav: false,
      },
    },
  });

  $(".CustomTabHeaders").owlCarousel({
    items: 2,
    loop: true,
    autoPlay: false,
    nav: true,
  });
});

// FAQ JS START

$(function () {
  var owl = $(".article_slider");
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        autoplay: false,
      },
      1200: {
        items: 3,
        nav: false,
      },
      768: {
        items: 2,
        nav: false,
      },
    },
  });
});

$(document).ready(function () {
  $("#viewmore").click(function () {
    $(".more_faq").toggle("slow");
  });
});

// HOW Aditiya Birla Help

$(function () {
  var owl = $(".processing_slider");
  owl.owlCarousel({
    items: 1,
    autoplay: false,
    loop: true,
    margin: 15,
    autoplayTimeout: 2000,
  });
});

// article papge article tab carousel js
$(function () {
  var owl = $(".article_Tab");
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
  });
});
