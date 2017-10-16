$(document).ready(function(){

/* For the Sticky navigation */
    
 $('.js--section-features').waypoint(function(direction){
     
     if (direction === 'down'){
         $('nav').addClass('sticky');
     }else{
         $('nav').removeClass('sticky');
     }
     
 },{offset: '60px;'
   });
    
   /* Scroll on Buttons  */
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
   $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    

    /* Scroll for Navigation Links */
    
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
  /* Animations on Scroll */
     
    $('.js--wp-1').waypoint(function(direction){ 
       
        $('.js--wp-1').addClass('animated fadeIn');
        
     },
    {
        offset:'50%;'
            });
    
    $('.js--wp-2').waypoint(function(direction){ 
       
        $('.js--wp-2').addClass('animated fadeInUp');
        
     },
    {
        offset:'50%;'
            });
    
    $('.js--wp-3').waypoint(function(direction){ 
       
        $('.js--wp-3').addClass('animated fadeIn');
        
     },
    {
        offset:'50%;'
            });
    
    $('.js--wp-4').waypoint(function(direction){ 
       
        $('.js--wp-4').addClass('animated pulse');
        
     },
    {
        offset:'50%;'
            });
    
    
    
    $('.js--nav-icon').click(function(){
        
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
    
    /* Youtube video Resizing */
    
     sizeTheVideo();
  $(window).resize(function(){
    sizeTheVideo();
  });  
    
    function sizeTheVideo(){
  // - 1.78 is the aspect ratio of the video
// - This will work if your video is 1920 x 1080
// - To find this value divide the video's native width by the height eg 1920/1080 = 1.78
  var aspectRatio = 1.78;
  
    var video = $('#videoWithJs iframe');
    var videoHeight = video.outerHeight();
    var newWidth = videoHeight*aspectRatio;
		var halfNewWidth = newWidth/2;
    
  //Define the new width and centrally align the iframe
  video.css({"width":newWidth+"px","left":"50%","margin-left":"-"+halfNewWidth+"px"});
}
    
  });



