jQuery(document).ready(function($) {
	$('.close').click(function(event) {
		$(this).parent().parent().fadeOut();
	});

	$('.modal-show').click(function(event) {
		event.preventDefault();
		$('#overlay').fadeIn();
	});

	$('.modal-show-q').click(function(event) {
		event.preventDefault();
		$('#overlay-q').fadeIn();
	});
	$('.modal-file').click(function(event) {
		event.preventDefault();
		$('#overlay-file').fadeIn();
	});

	var d = new Date();
	var n = d.getDate();
	var m = d.getMonth();

	var monthName = new Array ("Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря");

	$('.tomorownum').text(n+1);
	$('.tomorowmon').text(monthName[m]);

});