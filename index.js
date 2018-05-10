var page = require('webpage').create();  
system = require('system');  

var address;  
if(system.args.length == 1){  
    phantom.exit();  
}else{  
    adress = system.args[1];  
    page.open(adress, function (status){  
    if (status != "success"){  
        console.log('FAIL to load the address');  
        phantom.exit();  
    }  
          
    page.evaluate(function(){  
       //此函数在目标页面执行的，上下文环境非本phantomjs，所以不能用到这个js中其他变量         
       // window.scrollTo(0,10000);//滚动到底部  
        window.document.body.scrollTop = document.body.scrollHeight;  
          
      /**  window.setTimeout(function(){  
            var plist = document.querySelectorAll("a");  
            var len = plist.length;  
            while(len)  
            {  
                len--;  
                var el = plist[len];  
                el.style.border = "1px solid red";  
            }  
        },5000);  **/
    });  
      
    window.setTimeout(function (){  
        //在本地生成截图 
        var timer = new Date().getTime(); 
        page.render("./snapshot/tiny_"+timer+".png");         
       // console.log(page.content);         
        phantom.exit();  
    }, 0);      
    });  
}  