$(document).ready(function(){
	buttonClicked = function() {

		$.when('buttonClicked').done(function() {
			$('.divobj').remove();
		});

		var answer = prompt('How many blocks?');

		for (var i = 0; i < answer; i++) {
			$(document).ready(function() {
				$('#container').append('<div class="divobj"></div>');
			});
		};

		$('.divobj').hover(function() {
			$(this).addClass('highlight');
		});

	};
});