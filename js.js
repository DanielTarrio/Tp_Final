
/*{}*/
let video="";
let mi_intervalo="";
let ctrl="";

const reproducir=(x,y)=>{
    video=document.getElementById(y);
    let dur_min=parseInt(video.duration/60);
    let dur_seg=parseInt(video.duration-(dur_min*60));
    ctrl=x;
    const number = 1
    dur_min=dur_min.toString().padStart(2, '0');
    dur_seg=dur_seg.toString().padStart(2, '0');
    document.getElementById("duracion").innerText=dur_min+":"+dur_seg;
    if(video.paused==false){
        video.pause();
        ctrl.classList.add('ctrl_play');
        ctrl.classList.remove('ctrl_pause'); //no utilizo toogle, producia errores al cambiar mas de una vez
        stop_temporizador();
    }else{
        video.play();
        ctrl.classList.remove('ctrl_play');
        ctrl.classList.add('ctrl_pause');
        temporizador()
    }
}

const temporizador=()=> {
    mi_intervalo = setInterval(temporizador, 1000);
    let rep_min=parseInt(video.currentTime/60);
    let rep_seg=parseInt(video.currentTime-(rep_min*60));
    rep_min=rep_min.toString().padStart(2, '0');
    rep_seg=rep_seg.toString().padStart(2, '0');
    document.getElementById("reproducido").innerText=rep_min+":"+rep_seg;
    document.getElementById("mi_barra").value=parseFloat((video.currentTime/video.duration)*100);
    if(video.duration==video.currentTime){ /* se pude reemplazar por video.ended*/
        stop_temporizador();
        ctrl.classList.add('ctrl_play');
        ctrl.classList.remove('ctrl_pause');
        video.load()
    }
}

const avance=(x)=>{
    video=document.getElementById(x);
    video.currentTime=video.duration*(document.getElementById("mi_barra").value/100);
}

const maximizar=(y)=>{
    video=document.getElementById(y);
   /* video.width = 1000; */video
   if (video.requestFullscreen) {
    video.requestFullscreen();
    }
    console.dir(video);
}

const stop_temporizador=()=>{
  clearInterval(mi_intervalo);
}


