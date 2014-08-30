'use strict'

$(function(){
	clock($("#timer"));

	function clock(target){
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		h = h<10?"0"+h:h;
		m = m<10?"0"+m:m;
		s = s<10?"0"+s:s;
		var time_str = h + ":" + m + ":" + s;
		target.html(time_str);
		if(s=="00"){
			console.log("aaaa");
		}
		setTimeout(function(){
			clock(target)
		},1000);
	}
});
