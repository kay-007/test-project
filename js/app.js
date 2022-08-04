$(document).ready(function(){
	
	// Start About Us

	$(window).scroll(function(){
		var getscroll = $(this).scrollTop();
		// console.log(getscroll);

		if(getscroll >= 870){
			$(".about-chefs").addClass("fromlefts");
			$(".about-contents").addClass("fromrights");
		}else{
			$(".about-chefs").removeClass("fromlefts");
			$(".about-contents").removeClass("fromrights");
		}
	});

	// End About Us

	// Start Footer 
	var getyear = $("#autoyear");
	var getfullyear = new Date().getUTCFullYear();
	getyear.text(getfullyear);
	// End Footer

});