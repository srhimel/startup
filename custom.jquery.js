function countChar(val) {
    var len = val.value.length;
    if (len > 31) {
      val.value = val.value.substring(0, 30);
    } else {
      $('#charNum').text(len);
    }
  };

  function countCharT(val) {
    var len = val.value.length;
    if (len > 151) {
      val.value = val.value.substring(0, 150);
    } else {
      $('#charNumT').text(len);
    }
  };

  $(document).ready(function() {
    var fixHeight = function() {
      $('.navbar-nav').css(
        'max-height',
        document.documentElement.clientHeight - 150
      );
    };
    fixHeight();
    $(window).resize(function() {
      fixHeight();
    });
    $('.navbar .navbar-toggler').on('click', function() {
      fixHeight();
    });
    $('.navbar-toggler, .overlay').on('click', function() {
      $('.mobileMenu, .overlay').toggleClass('open');
    });
    $('.image-file').change(function(e){
      var fileName = e.target.files[0].name;
      $("#imageName").html(fileName);
  });




  });