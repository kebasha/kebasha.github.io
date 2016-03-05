$(function(){
	$.ajax({
        url: 'titles.txt',
        dataType: 'text',
        success: function(data) {
        	var dataStr = data.replace(/[\r\n]/g,',');
            var arr = dataStr.split(',');
            var liView = "";
            for(var i=0;i<arr.length;i++){
                liView += '<li><a href="javascript:void(0);" onclick="bloglist('+"'"+arr[i]+"'"+');">'+arr[i]+'</a></li>';
            }
            $("#titles").html(liView);
        }
    });
});

function bloglist(title){
	$.ajax({
        url: 'titles-'+title+'.txt',
        dataType: 'text',
        success: function(data) {
        	data = data.replace(/[\r\n]/g,',');
            var arr = data.split(',');
            var liView = "";
            for(var i=0;i<arr.length;i++){
            	var blogArr = arr[i].split('|');
                liView += '<li class="postsli"><small class="datetime muted" data-time="'+blogArr[1]+'">'+blogArr[1]+'</small><a href="/shell-string-operations/">'+blogArr[0]+'</a></li>';
            }
            $("#contentPosts").html(liView);
        }
    });
}