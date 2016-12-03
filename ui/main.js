var img=document.getElementById("madi");
var count=0;
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
    count=count+1;
    span=document.getElementById("count");
    span.innerHTML=count.toString();
};