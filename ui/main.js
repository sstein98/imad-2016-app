var img=document.getElementById("madi");
marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};
button=document.getElementById("counter");
button.onclick=function(){
    var req=XMLHttpRequest();
    if (req.onreadystatechange===XMLHttpRequest.DONE){
        if(req.status===200){
            var counter=req.responseText; 
            var span=document.getElementById("count");
            span.innerHTML=counter.toString();
        }
    }
    
    
};