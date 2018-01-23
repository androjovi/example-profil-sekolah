(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
	$('ul.tabs').tabs('select_tab', 'tab_id');
	  	$(window).scroll(function(){
  var scroll = $(window).scrollTop();

  if (scroll >= 500){
    $("nav").addClass("dark-nav");
	  $("nav").removeClass("transparent");
  }else{
    $("nav").removeClass("dark-nav");
	  $("nav").addClass("transparent");
  }
})
  }); // end of document ready
})(jQuery); // end of jQuery name space