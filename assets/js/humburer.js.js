type="text/javascript">jQuery(document).ready(function($){
$('.humburger-menu').click(function(event){
$('.menu-box').toggleClass('menu-box-on');
$('.line-one').toggleClass('line-one-on');
$('.line-two').toggleClass('line-two-on');
});
});

type="text/javascript">jQuery(document).ready(function($) {
    $('a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location == link) {
            $(this).addClass('activekink');
        }
    });
});



$(document).ready(function(){
  var body = $("body");

  $(document).on("click", "a:not([href^='#']):not([href^='tel']):not([href^='mailto']):not([href^='http'])", function(e) {
  e.preventDefault();
  $(".box-load").toggleClass("box-load-off");
  var self = this;
  setTimeout(function () {
    window.location.href = $(self).attr("href");
  }, 500);
  });
});


window.onload = function(){document.body.className+="body-on";};
var div = document.querySelector('.box-load');
window.onload = () => {
  div.classList.add ('box-load-off');
  console.log(div)
}
