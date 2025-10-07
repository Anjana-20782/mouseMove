let cursor=document.getElementById("cursor")
document.addEventListener("mousemove",function(e){

    cursor.style.left=e.clientX -30+ "px"
    cursor.style.top=e.clientY -30+ "px"
});
