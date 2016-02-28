$(function(){
	$.ajax({
        url: 'titles.txt',
        dataType: 'text',
        success: function(data) {
        	var dataStr = data.replace(/.+/g,',');
        	alert(dataStr);
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
        	data = data.replace(/.+/g,',');
            var arr = data.split(',');
            var liView = "";
            for(var i=0;i<arr.length;i++){
                liView += '<li><a href="/shell-string-operations/">'+arr[i]+'</a></li>';
            }
            $("#content").html(liView);
        }
    });
}