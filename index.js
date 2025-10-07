let cursor=document.getElementById("cursor")
document.addEventListener("mousemove",function(e){

    cursor.style.left=e.clientX -20+ "px"
    cursor.style.top=e.clientY -20+ "px"
});
document.body.style.cursor="url('/icons8-cursor.svg')"