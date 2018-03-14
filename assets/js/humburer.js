Barba.Dispatcher.on('newPageReady', function(current, prev, newContainer, linkClicked, initStateChange	) {

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



            var transEffect = Barba.BaseTransition.extend({
                start: function(){
                  this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
                },
                fadeInNewcontent: function(nc) {
                  jQuery('.box-load-top').removeClass('box-load-top-off');
                  jQuery('.box-load-bottom').removeClass('box-load-bottom-off');
                  nc.hide();
                  var _this = this;
                  $(this.oldContainer).fadeOut(2000).promise().done(() => {
                    jQuery('.box-load-top').addClass('box-load-top-off');
                    jQuery('.box-load-bottom').addClass('box-load-bottom-off');
                    nc.css('visibility','visible');
                    nc.fadeIn(2000, function(){
                      _this.done();
                    })
                  });
                }
            });
            Barba.Pjax.getTransition = function() {
              return transEffect;
            }
           
         



window.onload = function(){document.body.className+="body-on";};
var div = document.querySelector('.box-load-top');
var div2 = document.querySelector('.box-load-bottom');
window.onload = () => {
  div.classList.add ('box-load-top-off');
  div2.classList.add ('box-load-bottom-off');
  console.log(div)
 
}



});
