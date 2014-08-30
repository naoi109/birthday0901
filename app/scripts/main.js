'use strict';

$(function(){
  //初期
  clock($('#timer'));
  jsonget();
});

//時計
function clock(target){
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  h = h<10?'0'+h:h;
  m = m<10?'0'+m:m;
  s = s<10?'0'+s:s;
  var time_str = h + ':' + m + ':' + s;
  target.html(time_str);
  if(s=='00'){
  	jsonget();
  }
  setTimeout(function(){
  	clock(target)
  },1000);
}

//JSONからデータ取得
function jsonget(){
  $.ajax({
	  type: 'GET',
	  url: 'scripts/data.json',
	  dataType: 'json',
	  success: function(json){
		  var data_num = Math.floor( Math.random() * 3 ); //データ個数
		  $('#place').html('<div>at '+json[data_num].place+'</div>');
		  $('#event').html('<div>'+json[data_num].date+' '+json[data_num].title+'</div>');
		  $('#bg').html('<img src="'+'images/photo/'+json[data_num].image_path+'.jpg">');
      $('.bg img').hide();
      $('.bg img').load(function(){
        console.log('finish');
        $('.bg img').show();
        $('.bg').addClass('animate');
      });
  	}
  });
}

//preloder
$.event.add(window, 'load', function() {
    $('.event').addClass('animate');
});