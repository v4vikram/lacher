$(document).ready(function () {
  function stickyHeader() {

    var header = $(".wrapper-for-sticky");
    var sticky = header.offset().top; // Get the initial offset position of the header

    $(window).scroll(function () {
      // Get the current scroll position
      if ($(window).scrollTop() > sticky) {
        $('.header-logo').addClass('header-logo-sticky')
        header.addClass("sticky-header");
        adjustMobileHeader(); // Adjust the mobile header position based on the sticky header
      } else {
        $('.header-logo').removeClass('header-logo-sticky')
        header.removeClass("sticky-header");
        adjustMobileHeader(); // Adjust the mobile header when header is not sticky
      }
    });
    
    function adjustMobileHeader() {
      // Calculate the height of the sticky header (it might change after sticky)
      var stickyHeaderHeight = header.outerHeight(); // Get the height of the header, including padding and border
      
      // Adjust the top position of the mobile header accordingly
      if ($(window).scrollTop() > sticky) {
        $(".mobile-header").css({
          top: stickyHeaderHeight + "px", // Position the mobile header just below the sticky header
        });
      } else {
        $(".mobile-header").css({
          top: (stickyHeaderHeight + 50) + "px", // Adjust top when header is not sticky, add any margin you need
        });
      }
    }
    
    // Run the function once to set the initial position
    adjustMobileHeader();
  }
  stickyHeader();

  function mobileMenu() {
    $("#toggle-hamburger").on("click touchstart", function (e) {
      e.preventDefault(); // Prevent default action
      $(".mobile-header").toggleClass("active-mobile-header");
      $("body, html").toggleClass("body-hidden");
  });

    $(".mobile-header ul li").click(function (e) {
      e.preventDefault(); // Prevent default click behavior
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
    $(".our-class").owlCarousel({
      autoplay: false,
      smartSpeed: 1000,
      items: 1,
      stagePadding: 0,
      center: true,
      nav: false,
      margin: 10,
      dots: true, // Enable dots for both screen sizes
      loop: true,
      touchDrag: true,
      pullDrag: true,
      mouseDrag: true,
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
      autoplay: false,
      smartSpeed: 1000,
      items: 1,
      stagePadding: 0,
      center: true,
      nav: false,
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
          dotsContainer: ".process-custom-dots", // Use custom dots on larger screens
        },
        1024: {
          dotsContainer: ".process-custom-dots", // Use custom dots on larger screens
        },
        1366: {
          dotsContainer: ".process-custom-dots", // Use custom dots on larger screens
        }
      }
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
        1280: {
          items: 2,
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

  function priceRangeFilter(){
    const slider = document.getElementById('price-slider');
    if(slider){
      noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        },
        format: {
            to: function (value) {
                return '$' + value.toFixed(0);
            },
            from: function (value) {
                return Number(value.replace('$', ''));
            }
        }
    });

    const minValue = document.getElementById('min-value');
    const maxValue = document.getElementById('max-value');

    slider.noUiSlider.on('update', function (values) {
        minValue.textContent = values[0];
        maxValue.textContent = values[1];
    });
    }


  }
  priceRangeFilter()
  
  function faqAccordian() {
    $(".faq-toggle").on("click", function() {
        var content = $(this).next(".faq-content");

        // Close all FAQ contents except the one being clicked
        $(".faq-content").not(content).slideUp(100);
        
        // Toggle the current FAQ content
        content.slideToggle(100);

        // Remove the "no-after" class from all plus icons except the one being clicked
        $(".plus-icon").not($(this).find(".plus-icon")).removeClass("no-after");
        
        // Toggle the "no-after" class on the clicked one
        $(this).find(".plus-icon").toggleClass("no-after");
    });
}

  faqAccordian()
});
