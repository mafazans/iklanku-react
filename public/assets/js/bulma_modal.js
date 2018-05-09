$('.modal-background, .modal-close').click(function() {
	$('html').removeClass('is-clipped');
	$(this).parent().removeClass('is-active');
});

$('.modal-card-head .delete, .modal-card-foot .button').click(function() {
	$('html').removeClass('is-clipped');
	$('#modal-ter').removeClass('is-active');
});

$(document).on('keyup',function(e) 
{
	if (e.keyCode == 27) {
		$('html').removeClass('is-clipped');
		$('.modal').removeClass('is-active');
	}
});

$('.close-modal').click(function() {
	$('html').removeClass('is-clipped');
	$('.modal').removeClass('is-active');
});
