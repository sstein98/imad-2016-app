var img=document.getElementById("madi");
marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};
button.onclick=function(){
    var req=XMLHttpRequest();
    req.onreadystatechange=function(){
        if (req.onreadystatechange===XMLHttpRequest.DONE){
            if(req.status===200){
                var counter=req.responseText; 
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
            }
        }
    };
    req.open('GET','ashikameer.imad.hasura-app.io/counter',true);
    req.send(null);
};
    
