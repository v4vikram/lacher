$(document).ready(function () {
  function stickyHeader() {

    var header = $("#desktop-header .middle-wrapper");
  var sticky = header.offset().top; // Get the initial offset position of the header

  $(window).scroll(function () {
    if ($(window).scrollTop() > sticky) {
      header.addClass("sticky-header"); // Add the sticky class when scroll position is reached
    } else {
      header.removeClass("sticky-header"); // Remove the sticky class when not scrolled
    }
  });
  }
  stickyHeader();

  function mobileMenu() {
    $("#toggle-hamburger").click(function () {
      $(".mobile-header").toggleClass("active-mobile-header");
      $("body").toggleClass("body-hidden");
    });

    $(".mobile-header ul li").click(function () {
      $(this).find(".sub-menu").slideToggle(400);
      // $(this).find("i").toggleClass("rotate-down-arrow");
      $(this).find(".plus-icon").toggleClass("no-after");
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
      dots: true, // Enable dots for both screen sizes
      loop: true,
      touchDrag: true,
      pullDrag: true,
      mouseDrag: true,
      responsive: {
        0: {
          nav: false,
          dotsContainer: false, // Use default dots on small screens
        },
        768: {
          dotsContainer: ".banner-custom-dots", // Use custom dots on larger screens
        }
      }
    });
    
    // Apply custom text to the custom dots
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
      nav: false,
      autoWidth: false,
      dots: true,
      touchDrag: false,
        pullDrag: false,
        mouseDrag:false,
      dotsContainer: ".process-custom-dots",
      animateIn: "animateIn", 
      // animateOut: "animateOut",
      responsive: {
        0: {
          items: 1,
          stagePadding: 15,
        },
        768: {
          items: 1,
          stagePadding: 15,
        },
        1024: {
          items: 1,
          stagePadding: 20,
        },
        1366: {
          items: 1,
          stagePadding: 9,
        },
      },
    });

    // process custom dots
    var processCustomTexts = ["Our Process", "Community", "Commitement"];

    // Add custom text to each dot after Owl Carousel initializes
    $(".process-custom-dots .owl-dot").each(function (index) {
      $(this).text(processCustomTexts[index]);
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
