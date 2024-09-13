let a=document.querySelector("body");
// a.style.transition="3s"
function colo(){
    if(a.style.backgroundColor!="black"){
        a.style.backgroundColor="black";
        a.style.color="white";
    }else{
        a.style.backgroundColor="white";
        a.style.color="black";
    }
}