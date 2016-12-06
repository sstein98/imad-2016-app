var img=document.getElementById("madi");
marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);

};
var button= document.getElementById("counter")
button.onclick=function(){
    var request=XMLHttpRequest();
    request.onreadystatechange=function(){
        if (request.onreadystatechange===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter=request.responseText; 
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://ashikameer.imad.hasura-app.io/counter',true);
    request.send(null);
};
    
