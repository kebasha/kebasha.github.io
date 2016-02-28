$(function(){
	$.ajax({
        url: 'titles.txt',
        dataType: 'text',
        success: function(data) {
            var arr = data.split(',');
            var liView = "";
            for(var i=0;i<arr.length;i++){
                liView += '<li><a href="#">'+arr[i]+'</a></li>';
            }
            $("#titles").html(liView);
        }
    });
});