

$(document).ready(function () {
    
window.onscroll = function() {myFunction()};


function myFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            animateBar()
        } else {
          document.getElementById("myP").className = "";
    }
}function animateBar(){

	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},4000);
	});
 }
});

