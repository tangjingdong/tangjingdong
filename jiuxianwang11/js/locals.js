
$(function(){
	
	for(var i=0;i < localStorage.length-1;i++){
		if(localStorage.key(i)<10){
		var ids = localStorage.key(i);
		//alert(localStorage.length)
		//console.log(i)
		var datas = JSON.parse(localStorage.getItem(ids));		
		//console.log(ids)	
		var num= localStorage["num"]
$("#all").append("<div class='div1'><div class='top'><p class='p1'>姓名："+datas.name+"</p><p class='p2'>电话："+datas.phone+"</p><p class='p3'>地址："+datas.add+"</p></div><div class='bottom'><input type='radio' name='xuan' class='inp1'/><span>配送至此</span><img src='../img/shan.gif' dataid=" + num +" class='img2' /><img src='../img/gai.gif' class='img1'/></div></div>")	

		}
	}
})

$(function(){
	$("#all").on("click",".inp1",function(){
		window.location.href = "clearinghouse.html"
		var xingm=$(this).parent().siblings(".top").find(".p1").html()
		var phone=$(this).parent().siblings(".top").find(".p2").html()
		var add=$(this).parent().siblings(".top").find(".p3").html()
		
		localStorage["xingm"] = xingm
		localStorage["xing"] = phone
		localStorage["xin"] = add
		
		localStorage["panduan1"] = true
		
	})
	$("#top").on("click",".i1",function(){
		window.location.href = "clearinghouse.html"
	})
})


$(function(){
	for(var i = 0; i < $(".img2").length; i++){
		$(".img2").click(function(){
			console.log(i)
		})
	}
	$(".img2").click(function(){
	console.log($(".img2").length)
	$(this).parent().parent().hide()
	console.log(Number($(this).attr("dataid"))+1)
	localStorage.removeItem(Number($(this).attr("dataid"))+1);
		
})
	
//$(function(){
//	$("#all .bottom").on("click",".img1",function(){
//		var leng = localStorage.length
////		console.log(leng)
//		for(var i=0 ; i < leng; i++	){
////			console.log(localStorage.key(i))
//		}
//		
//	})	
})




