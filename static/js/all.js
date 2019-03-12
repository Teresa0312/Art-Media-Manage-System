$(document).ready(function(){
	//获取教学资源
	getResource();
})

var res=[
	{'id':1,'class':'17120512','src':'../static/img/3.png'},
	{'id':2,'class':'17120512','src':'../static/img/3.png'},
	{'id':3,'class':'17120512','src':'../static/img/3.png'},
	{'id':4,'class':'17120512','src':'../static/img/3.png'},
	{'id':5,'class':'17120512','src':'../static/img/3.png'},
	{'id':6,'class':'17120512','src':'../static/img/3.png'},
	{'id':7,'class':'17120512','src':'../static/img/3.png'},
	{'id':8,'class':'17120512','src':'../static/img/3.png'},
	{'id':9,'class':'17120512','src':'../static/img/3.png'},
	{'id':10,'class':'17120512','src':'../static/img/3.png'},
	{'id':11,'class':'17120512','src':'../static/img/3.png'},
	{'id':12,'class':'17120512','src':'../static/img/3.png'},
	{'id':13,'class':'17120512','src':'../static/img/3.png'},
	{'id':14,'class':'17120512','src':'../static/img/3.png'},
	{'id':15,'class':'17120512','src':'../static/img/3.png'},
	{'id':16,'class':'17120512','src':'../static/img/3.png'},
	{'id':17,'class':'17120512','src':'../static/img/3.png'},
	{'id':18,'class':'17120512','src':'../static/img/3.png'},
	{'id':19,'class':'17120512','src':'../static/img/3.png'},
	{'id':20,'class':'17120512','src':'../static/img/3.png'},
	{'id':21,'class':'17120512','src':'../static/img/3.png'},
	{'id':22,'class':'17120512','src':'../static/img/3.png'},
	{'id':23,'class':'17120512','src':'../static/img/3.png'},
];

function getResource(){
	var txt="";
	$.each(res,function(index,obj){
		txt+='<div class="col-md-1 col-xs-1 pics"><a href="infor.html"  target="_blank"><img src="'+obj.src+'"></a><span>'+obj.class+'</span></div>'
	});
	$("#pictures").append(txt);
}