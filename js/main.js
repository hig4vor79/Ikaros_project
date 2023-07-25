$(function() {
  //slider
	$('#sliderslick').slick({
        dots: false,
        arrows : false,
        infinite: true,
        speed: 300, 
        slidesToShow: 1,
        slidesToScroll: 1,   
  });	
  $('.prev').on('click', function() {
    $('#sliderslick').slick('slickPrev');
  });
  $('.next').on('click', function() {
    $('#sliderslick').slick('slickNext');
  });

  // tab
	$('#menu-tabs li').click(function(){
		var thisClass = this.className.slice(0,2);
		$('div.t1').hide();
		$('div.t2').hide();
		$('div.t3').hide();
		$('div.' + thisClass).fadeIn(500);
		$('#menu-tabs li').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('#menu-tabs li.t1').click();
	
});