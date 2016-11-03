var img=document.getElementById("madi");
marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};
button=document.getElementById("button");
but.onclick=function(){
    console.log("Dude!");
};