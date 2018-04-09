define([], function(){
	return {
		init: function(){
			document.getElementById('btn_donate').onclick = function() {
				$('#donate_board').addClass('hidden');
				$('#donate_guide').removeClass('hidden');
			}
		}
	}
});