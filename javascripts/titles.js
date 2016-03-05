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

var pageSize = 5;
function bloglist(title, number){
    if(number < 1){
        return;
    }
	$.ajax({
        url: 'titles-'+title+'.txt',
        dataType: 'text',
        success: function(data) {
        	data = data.replace(/[\r\n]/g,',');
            var arr = data.split(',');
            var liView = "";
            var start = pageSize * (number-1);
            var end = pageSize * number;
            if(start > arr.length){
                return;
            }
            for(var i=0;i<arr.length;i++){
                if(i > start-1 && i <= end-1){
            	    var blogArr = arr[i].split('|');
                    liView += '<li class="postsli"><small class="datetime muted" data-time="'+blogArr[2]+'">'+blogArr[2]+'</small><a href="/'+title+'/index'+blogArr[0]+'.html">'+blogArr[1]+'</a></li>';
                }
            }
            $("#contentPosts").html(liView);
        }
    });
}

function loadPage(title, number){
    alert('000');
    $("a[name='pagingLeft']").click(function(){
        alert('11111');
        bloglist(title, number-1);
    });
    $("a[name='pagingRight']").on('click',function(){
        alert('2222');
        bloglist(title, number+1);
    });
}

function loadDocument(title, index){

}




