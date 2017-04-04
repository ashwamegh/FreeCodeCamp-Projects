$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("header").addClass("site-header-active");
            $("header").removeClass("site-header");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("header").removeClass("site-header-active");
           $("header").addClass("site-header");
        }
    });
});

$(".nav-link > a").click(function() {             // when clicking any of these links
    $(".nav-link > a").removeClass("active"); // remove highlight from all links
    $(this).addClass("active");          // add highlight to clicked link
})

/*** Scroll to Top ***/
$(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 

/****** Smooth Navigation Scrolls ********/

$(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });