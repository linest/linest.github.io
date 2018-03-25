<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>function tagcloud_rich(tags){
  if ((!tags || !tags.hasOwnProperty('length'))){
    tags = this.site.tags;
  }

  if (!tags || !tags.length) return '';
  
  var result = [];

  tags = tags.sort('name', 1);

  // Ignore tags with zero posts
  tags = tags.filter(function(tag){
    return tag.length;
  });
 /****与tagcloud.js一样，获得tags 结束***/
  
  //计算标签出现次数最大值，比如，博客中一共有两个标签，一个是hello,一个是world,hello出现2次，world 出现1次，那么maxsize就是2
  var maxsize = 1;

  tags.sort('length').forEach(function(tag){
    var length = tag.length;
    if(length > maxsize)
        maxsize = length;
  });
console.log(tags);
}