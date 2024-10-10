$(document).ready(function () {
  function stickyHeader() {
    var header = $("#middle-wrappe");

    var sticky = header.offset().top; // Get the initial offset position of the header

    $(window).scroll(function () {
      if (window.scrollY > sticky) {
        // Use window.scrollY instead of pageYOffset
        header.addClass("sticky"); // Add the sticky class to the header when you reach its scroll position
      } else {
        header.removeClass("sticky"); // Remove the sticky class when you leave the scroll position
      }
    });
  }
  // stickyHeader();

  function mobileMenu() {
    $("#toggle-hamburger").click(function () {
      $(".mobile-header").toggleClass("active-mobile-header");
    });

    $(".mobile-header ul li").click(function () {
      $(this).find(".sub-menu").slideToggle(400);
      $(this).find("i").toggleClass("rotate-down-arrow");
    });
  }
  mobileMenu();

  function SearchForm() {
    // Toggle dropdown on click
    $(".dropdown-toggle").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent event bubbling
      $(".custom-dropdown").toggleClass("open");
    });

    // Close dropdown if clicked outside
    $(document).on("click", function () {
      $(".custom-dropdown").removeClass("open");
    });

    // Prevent closing dropdown when clicking inside
    $(".custom-dropdown").on("click", function (e) {
      e.stopPropagation();
    });
  }
  SearchForm();
  function checkBox() {
    // Handle "Read More" and "Show Less" for each section
    $(".checkbox-wrapper").each(function () {
      const section = $(this);
      const moreBtn = section.find(".show-more");
      const lessBtn = section.find(".show-less");
      const hiddenCheckboxes = section.find(".checkbox-hidden");

      // Show More button click
      moreBtn.click(function () {
        hiddenCheckboxes.slideDown();
        moreBtn.hide();
        lessBtn.show();
      });

      // Show Less button click
      lessBtn.click(function () {
        hiddenCheckboxes.slideUp();
        lessBtn.hide();
        moreBtn.show();
      });
    });
  }
  checkBox();

  function sliders() {
    $(".banner-slider").owlCarousel({
      autoplay: false,
      smartSpeed: 1000,
      items: 1,
      stagePadding: 0,
      center: true,
      nav: true,
      margin: 10,
      dots: true,
      loop: true,
      touchDrag: true,
      pullDrag: true,
      mouseDrag: true,
      dotsContainer: ".banner-custom-dots",
    });

    // Custom text for each dot
    var customTexts = ["New Arrivals", "Limited Edition", "product_3"];
    $(".banner-custom-dots .owl-dot").each(function (index) {
      $(this).text(customTexts[index]);
    });

    $(".collections").owlCarousel({
      loop: true,
      smartSpeed: 1000,
      margin: 30,
      nav: true,
      autoWidth: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
          stagePadding: 15,
        },
        768: {
          items: 2,
          stagePadding: 15,
        },
        1024: {
          items: 3,
          stagePadding: 20,
        },
        1366: {
          items: 4,
          stagePadding: 9,
        },
      },
    });
    $(".process").owlCarousel({
      loop: true,
      smartSpeed: 1000,
      margin: 30,
      nav: true,
      autoWidth: false,
      dots: true,
      dotsContainer: ".custom-dots",
      animateIn: "animateIn", // Fade animation on large screens
      animateOut: "animateOut", // Fade animation on large screens
      responsive: {
        0: {
          items: 1,
          stagePadding: 15,
        },
        768: {
          items: 2,
          stagePadding: 15,
        },
        1024: {
          items: 3,
          stagePadding: 20,
        },
        1366: {
          items: 1,
          stagePadding: 9,
        },
      },
    });

    // Custom text for each dot
    var customTexts = ["Our Process", "Community", "Commitement"];

    // Add custom text to each dot after Owl Carousel initializes
    $(".custom-dots .owl-dot").each(function (index) {
      $(this).text(customTexts[index]);
    });
    $(".write-read").owlCarousel({
      loop: true,
      smartSpeed: 1000,
      margin: 30,
      nav: true,
      autoWidth: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
          stagePadding: 15,
        },
        768: {
          items: 3,
          stagePadding: 15,
        },
        1024: {
          items: 3,
          stagePadding: 20,
        },
        1366: {
          items: 2,
          stagePadding: 9,
        },
      },
    });
    $(".clients").owlCarousel({
      loop: true,
      smartSpeed: 1000,
      margin: 30,
      nav: true,
      autoWidth: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
          stagePadding: 15,
        },
        768: {
          items: 3,
          stagePadding: 15,
        },
        1024: {
          items: 3,
          stagePadding: 20,
        },
        1366: {
          items: 3,
          stagePadding: 9,
        },
      },
    });
  }
  sliders();
});
