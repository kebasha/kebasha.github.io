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

var pageSize = 1;
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

            var countPage = (arr.length % pageSize == 0 ? arr.length / pageSize : Math.ceil(arr.length / pageSize));
            var pageView = "";
            if(countPage <= 10){
                if(number == 1){
                    pageView += '<a href="javascript:void(0);" class="disabled">&lt; </a>';
                    for(var i=1;i<=countPage;i++){
                        if(i==number){
                            pageView += '<a href="javascript:void(0);" class="current">'+i+'</a>';
                        }else{
                            pageView += '<a href="javascript:void(0);">'+i+'</a>';
                        }
                    }
                    pageView += '<a href="javascript:void(0);">&gt; </a>';
                }else if(number == countPage){
                    pageView += '<a href="javascript:void(0);">&lt; </a>';
                    for(var i=1;i<=countPage;i++){
                        if(i==number){
                            pageView += '<a href="javascript:void(0);" class="current">'+i+'</a>';
                        }else{
                            pageView += '<a href="javascript:void(0);">'+i+'</a>';
                        }
                    }
                    pageView += '<a href="javascript:void(0);" class="disabled">&gt; </a>';
                }else{
                    pageView += '<a href="javascript:void(0);">&lt; </a>';
                    for(var i=1;i<=countPage;i++){
                        if(i==number){
                            pageView += '<a href="javascript:void(0);" class="current">'+i+'</a>';
                        }else{
                            pageView += '<a href="javascript:void(0);">'+i+'</a>';
                        }
                    }
                    pageView += '<a href="javascript:void(0);">&gt; </a>';
                }
            }else{
                if(number == 1){
                    pageView += '<a href="javascript:void(0);" class="disabled">&lt; </a>';
                    pageView += '<a href="javascript:void(0);" class="current">'+number+'</a>';
                    pageView += '<a href="javascript:void(0);">'+(number+1)+'</a>';
                    pageView += '<a href="javascript:void(0);">'+(number+2)+'</a>';
                    pageView += '<a href="javascript:void(0);">...</a>';
                    pageView += '<a href="javascript:void(0);">'+countPage+'</a>';
                    pageView += '<a href="javascript:void(0);">&gt; </a>';
                }else if(number == countPage){
                    pageView += '<a href="javascript:void(0);">&lt; </a>';
                    pageView += '<a href="javascript:void(0);" class="current">1</a>';
                    pageView += '<a href="javascript:void(0);">...</a>';
                    pageView += '<a href="javascript:void(0);">'+(countPage-2)+'</a>';
                    pageView += '<a href="javascript:void(0);">'+(countPage-1)+'</a>';
                    pageView += '<a href="javascript:void(0);">'+countPage+'</a>';
                    pageView += '<a href="javascript:void(0);" class="disabled">&gt; </a>';
                }else{
                    pageView += '<a href="javascript:void(0);">&lt; </a>';
                    if(number < 4){
                        for(var i=1;i<6;i++){
                            if(i==number){
                                pageView += '<a href="javascript:void(0);" class="current">'+i+'</a>';
                            }else{
                                pageView += '<a href="javascript:void(0);">'+i+'</a>';
                            }
                        }
                        pageView += '<a href="javascript:void(0);">...</a>';
                    }
                    if(number > 4 && number < countPage - 3){
                        pageView += '<a href="javascript:void(0);">...</a>';
                        pageView += '<a href="javascript:void(0);">'+(number-2)+'</a>';
                        pageView += '<a href="javascript:void(0);">'+(number-1)+'</a>';
                        pageView += '<a href="javascript:void(0);" class="current">'+number+'</a>';
                        pageView += '<a href="javascript:void(0);">'+(number+1)+'</a>';
                        pageView += '<a href="javascript:void(0);">'+(number+2)+'</a>';
                        pageView += '<a href="javascript:void(0);">...</a>';
                    }
                    if(number > countPage - 3){
                        pageView += '<a href="javascript:void(0);">...</a>';
                        for(var i=1;i<6;i++){
                            if(i==number){
                                pageView += '<a href="javascript:void(0);" class="current">'+i+'</a>';
                            }else{
                                pageView += '<a href="javascript:void(0);">'+i+'</a>';
                            }
                        }
                    }
                    pageView += '<a href="javascript:void(0);">&gt; </a>';
                }
            }
            
            $("#quotes").html(pageView);
        }
    });
}

function loadPage(title, number){
    $("#pagingLeft").html('<a href="javascript:void(0);" onclick="bloglist('+"'"+title+"',"+"'"+(number-1)+"',"+');">‹</a>');
    $("#pagingRight").html('<a href="javascript:void(0);" onclick="bloglist('+"'"+title+"',"+"'"+(number+1)+"'"+');">‹</a>');
    
}

function loadDocument(title, index){

}




