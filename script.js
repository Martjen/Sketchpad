$(document).ready(function(){
	buttonClicked = function() {

		//Deleting the previous grid.
		$.when('buttonClicked').done(function() {
			$('.divobj').remove();
		});

		//prompting user for number of divs.
		var answer = prompt('How many blocks? (768 looks best)');

		//Adding divs.
		for (var i = 0; i < answer; i++) {
			$(document).ready(function() {
				$('#container').append('<div class="divobj"></div>');
			});
		};

		//Adding a highlight when hovered over.
		$('.divobj').hover(function() {
			$(this).addClass('highlight');
		});

	};
});