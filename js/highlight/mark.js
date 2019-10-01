define([], function(){
	var addSourceMark = function() {
		var captions = document.querySelectorAll("figcaption");
		captions.forEach(function(caption){
			var isSample = caption.innerText == "Sample";
			var sourceMark = document.createElement("span");
			sourceMark.innerText = isSample ? "示例" : "源码";
			sourceMark.style.color = "#FFFFFF";
			sourceMark.style.borderRadius = "2px";
			sourceMark.style.marginRight = "7px";
			sourceMark.style.backgroundColor = isSample ? "#1ABC9C" : "#C7254E";
			caption.insertBefore(sourceMark, caption.firstChild);
		});
	}
	
	return {
		addMark: function() {
			addSourceMark();
		}
	}
});