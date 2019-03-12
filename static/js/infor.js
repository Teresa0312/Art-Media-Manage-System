$(document).ready(function(){

	getInfor();
	//获取友情链接
	getlinks();
})

var infor=[{
	'id':1,
	'src':"../static/img/xatu.jpg",
	'name':'西安工业大学',
	'auth':'西安工业大学',
	'number':'16060101101',
	'class':'16060101',
	'time':'2017-03-12',
	'desc':'西安工业大学简称”西安工大“，是中国西北地区唯一一所以兵工为特色，以工为主，理、文、经、管、法协调发展的教学研究型大学 ，原中华人民共和国兵器工业部直属的七所本科院校之一（“兵工七子”），是“十二五”期间陕西省重点建设的高水平教学研究型大学、陕西省人民政府与中国兵器工业集团、国家国防科技工业局共建高校、教育部“卓越工程师教育培养计划”试点高校、陕西省大学生创新能力培养综合改革试点学校。',
}];

function getInfor(){
	var txt=" ";
	$.each(infor,function(index,obj){
		txt+='<li>作者：'+obj.auth+'</li><li>学号：'+obj.number+'</li><li>班级：'
		+obj.class+'</li><li>时间：'+obj.time+'</li><li>介绍：'+obj.desc+'</li>';
	});
	$("#inforul").append(txt);
	$("#head").text(infor[0].name);
	console.log(txt);
}


//友情链接json
var links=[
	{'id':1,'name':'西安工业大学','href':'http://www.xatu.cn/'},
	{'id':2,'name':'西安工业大学','href':'http://www.xatu.cn/'},
	{'id':3,'name':'西安工业大学','href':'http://www.xatu.cn/'},
	{'id':4,'name':'西安工业大学','href':'http://www.xatu.cn/'},
	{'id':5,'name':'西安工业大学','href':'http://www.xatu.cn/'},
	{'id':6,'name':'西安工业大学','href':'http://www.xatu.cn/'},
	{'id':7,'name':'西安工业大学','href':'http://www.xatu.cn/'},
	{'id':8,'name':'西安工业大学','href':'http://www.xatu.cn/'},
	{'id':9,'name':'西安工业大学','href':'http://www.xatu.cn/'},
	{'id':10,'name':'西安工业大学','href':'http://www.xatu.cn/'},
];

//获取友情链接
function getlinks(){
	var txt=" ";
	$.each(links,function(index,obj){
		txt+='<li><a href="'+obj.href+'">'+obj.name+'</a></li>'
	});
	$("#linksul").append(txt);
}
