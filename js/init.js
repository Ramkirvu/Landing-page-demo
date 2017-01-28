(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
  $('a[href^="#"]').bind('click.smoothscroll',function (e) {
		 e.preventDefault();
		 
		var target = this.hash,
		 $target = $(target);
		 
		$('html, body').stop().animate({
		 'scrollTop': $target.offset().top
		 }, 500, 'swing', function () {
		 window.location.hash = target;
	 });
 });
})(jQuery); // end of jQuery name space