define([], function(){
    return {
		exec: function(){
            //使文章中的表格具有滚动条功能
            var article = document.querySelector(".article-entry");
            var tables = document.querySelectorAll(".article-entry > table");
            tables.forEach(function(table){
                var wrapperDiv = document.createElement("div");
                wrapperDiv.style.overflow = "auto";
                article.insertBefore(wrapperDiv,table);
                wrapperDiv.appendChild(table);
            });
		}
	}
});