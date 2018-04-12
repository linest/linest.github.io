define([], function(){
	return {
		init: function(){
			if(document.getElementById('btn_donate')){
				document.getElementById('btn_donate').onclick = function() {
					$('#donate_board').addClass('hidden');
					$('#donate_guide').removeClass('hidden');
				}
			}
		}
	}
});