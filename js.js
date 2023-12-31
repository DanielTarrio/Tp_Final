
/*{}*/
let video="";
let myInterval="";

const reproducir=(x)=>{
    video=document.getElementById(x);
    let dur_min=parseInt(video.duration/60);
    let dur_seg=parseInt(video.duration-(dur_min*60));
    document.getElementById("duracion").innerText=dur_min+"m:"+dur_seg+"s";
    if(video.paused==false){
        video.pause();
        myStopFunction();
    }else{
        video.play();
        myTimer()
    }
}


function myTimer() {
    myInterval = setInterval(myTimer, 1000);
    let rep_min=parseInt(video.currentTime/60);
    let rep_seg=parseInt(video.currentTime-(rep_min*60));
    document.getElementById("reproducido").innerText=rep_min+"m:"+rep_seg+"s";
    document.getElementById("mi_barra").value=parseFloat((video.currentTime/video.duration)*100)
    if(video.duration==video.currentTime){
        myStopFunction();
    }

}

function myStopFunction() {
  clearInterval(myInterval);
}


