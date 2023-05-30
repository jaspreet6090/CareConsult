/* When your mouse cursor enter the background, the fading won't pause and keep playing */ 
// $('.carousel').carousel({
//     pause: "false" /* Change to true to make it paused when your mouse cursor enter the background */
// });
var counter = function () {
  $("#section-counter, .hero-wrap, .ftco-counter").waypoint(
    function (direction) {
      if (
        direction === "down" &&
        !$(this.element).hasClass("ftco-animated")
      ) {
        var comma_separator_number_step =
          $.animateNumber.numberStepFactories.separator(",");
        $(".number").each(function () {
          var $this = $(this),
            num = $this.data("number");
          console.log(num);
          $this.animateNumber(
            {
              number: num,
              numberStep: comma_separator_number_step,
            },
            7000
          );
        });
      }
    },
    { offset: "95%" }
  );
};
counter();

var contentWayPoint = function () {
  var i = 0;
  $(".ftco-animate").waypoint(
    function (direction) {
      if (
        direction === "down" &&
        !$(this.element).hasClass("ftco-animated")
      ) {
        i++;

        $(this.element).addClass("item-animate");
        setTimeout(function () {
          $("body .ftco-animate.item-animate").each(function (k) {
            var el = $(this);
            setTimeout(
              function () {
                var effect = el.data("animate-effect");
                if (effect === "fadeIn") {
                  el.addClass("fadeIn ftco-animated");
                } 
                // else if (effect === "fadeInLeft") {
                  // el.addClass("fadeInLeft ftco-animated");
                else if (effect === "fadeInRight") {
                  el.addClass("fadeInRight ftco-animated");
                } else {
                  el.addClass("fadeInUp ftco-animated");
                }
                el.removeClass("item-animate");
              },
              k * 50,
              "easeInOutExpo"
            );
          });
        }, 100);
      }
    },
    { offset: "95%" }
  );
};



contentWayPoint();


$(document).ready(function () {
    $(".fadeInleft-animate").waypoint(function(direction){
      $(".fadeInleft-animate").addClass("animated fadeInLeft")
  
    },{
      offset:"50%"
    });
    $(".fadeInRight-animate").waypoint(function(direction){
      $(".fadeInRight-animate").addClass("animated fadeInRight")
  
    },{
      offset:"50%"
    });
    $(".zoomInDown-animate").waypoint(function(direction){
      $(".zoomInDown-animate").addClass("animated zoomInDown")
  
    },{
      offset:"50%"
    });
    $(".zoomIn-animate").waypoint(function(direction){
      $(".zoomIn-animate").addClass("animated zoomIn")
  
    },{
      offset:"50%"
    });
    $(".zoomInDown-animate").waypoint(function(direction){
      $(".zoomInDown-animate").addClass("animated zoomInDown")
  
    },{
      offset:"50%"
    });
    $(".fadeInUp-animate").waypoint(function(direction){
      $(".fadeInUp-animate").addClass("animated fadeInUp")
  
    },{
      offset:"50%"
    });
    $(".rotateInDownRight-animate").waypoint(function(direction){
      $(".rotateInDownRight-animate").addClass("animated rotateInDownRight")
  
    },{
      offset:"50%"
    });
    $(".rotateInDownLeft-animate").waypoint(function(direction){
      $(".rotateInDownLeft-animate").addClass("animated rotateInDownLeft")
  
    },{
      offset:"50%"
    });
    $(".flash-animate").waypoint(function(direction){
      $(".flash-animate").addClass("animated flash")
  
    },{
      offset:"50%"
    });
    $(".flipInX-animate").waypoint(function(direction){
      $(".flipInX-animate").addClass("animated flipInX")
  
    },{
      offset:"50%"
    });
  
  });
  


  function toggleShow () {
    var el = document.getElementById("box");
    el.classList.toggle("show");
  }




  $(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});
