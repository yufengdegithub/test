/* 导航 */
window.onload = function(){  
        var arr = document.getElementById('lavalampnav').getElementsByTagName('li');  
        for(var i = 0;i<arr.length;i++){  
            arr[i].onclick = function(){      
                //this是当前激活的按钮，在这里可以写对应的操作    
                if(this.className == 'btn1'){  
                    this.className = 'btn2';  
                    var name = this.id;  
                    var btn = document.getElementsByClassName('btn2');  
                    for(var j=0;j<btn.length;j++){  
                        if(btn[j].id!=name){  
                            btn[j].className = 'btn1';  
                        }  
                    }     
                }  
             }   
         }  
     }  

/* 品牌导航 */
     window.onload = function(){  
        var arr = document.getElementById('pinpai-nav').getElementsByTagName('li');  
        for(var i = 0;i<arr.length;i++){  
            arr[i].onclick = function(){ 
                 
                //this是当前激活的按钮，在这里可以写对应的操作    
                if(this.className == 'btn3'){  
                    this.className = 'btn4';  
                    var name = this.id;  
                    var btn = document.getElementsByClassName('btn4');  
                    for(var j=0;j<btn.length;j++){  
                        if(btn[j].id!=name){  
                            btn[j].className = 'btn3';  
                        }  
                    }     
                }  
             }   
         }  
     } 



