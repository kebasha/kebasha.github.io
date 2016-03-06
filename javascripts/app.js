var App = function(){

	var mapKeySupport = function(){

		$("body").keyup(function(event){

			if(event.which == 37 && $(".paging .left > a").length > 0){

				location.replace($(".paging .left > a").attr("href"));

			}else if (event.which == 39 && $(".paging .right > a").length > 0){

				location.replace($(".paging .right > a").attr("href"));
			}

		});
	};

	var nprogress = function(){

		NProgress.start();

		setTimeout(NProgress.done,600);
	};

	var duoshuo = function(){
		var ds = document.createElement('script');
		ds.type = 'text/javascript';ds.async = true;
		ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
		ds.charset = 'UTF-8';
		(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
	};

    var theater = function(){
        
        var t = new TheaterJS();

        t.describe("desc",.8,"#blog-desc");

        t.write("desc:If you want do, then do.");
    }

	return {
		
		mapKeySupport: function (){
			mapKeySupport();
		},

		initNProgress: function(){
			nprogress();
		},

		initDuoshuo: function(){
			duoshuo();
		},

        initTheater: function(){
            theater();
        }
	};
}();

$(document).ready(function() { 
	if(is_weixin() == true){
		$("#container .block").remove();
        $("#left").remove();
        $("#right").remove();
        $("#rmLeft").remove();
        $("#rmRight").remove();
    }
}); 

function is_weixin(){ 
    var ua = navigator.userAgent.toLowerCase(); 
    if(ua.match(/MicroMessenger/i)=="micromessenger") { 
        return true; 
    } else { 
        return false; 
    } 
}

function getQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    var data = decodeURI(r);
    alert(data);
    alert(r[2]);
    if(r!=null)return  unescape(r[2]); return null;
}
