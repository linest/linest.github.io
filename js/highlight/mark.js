define([], function(){
	var addSourceMark = function() {
		var captions = document.querySelectorAll("figcaption");
		captions.forEach(function(caption){
			var sourceMark = document.createElement("span");
			sourceMark.innerText = "源码";
			sourceMark.style.color = "#FFFFFF";
			sourceMark.style.borderRadius = "2px";
			sourceMark.style.marginRight = "7px";
			sourceMark.style.backgroundColor = "#c7254e";
			caption.insertBefore(sourceMark, caption.firstChild);
		});
	}
	
	return {
		addMark: function() {
			addSourceMark();
		}
	}
});