const mostrar=(nodo)=>{
    let duracion_video=parseInt(nodo.duration);
    let dur_min=parseInt(duracion_video/60);
    let dur_seg=duracion_video-(dur_min*60);
    console.dir(nodo);
    document.getElementById("dur").innerText=dur_min+"m "+dur_seg+"s"
    //nodo.currentTime=15000;
}

const ver_porcentaje=()=>{
    let nodo=document.getElementById("video_1");
    let porcentaje=parseFloat(parseInt(nodo.currentTime)/parseInt(nodo.duration));
    console.log("CurrentTime: "+nodo.currentTime+" Duracion:"+nodo.duration);
    console.log(porcentaje);
    document.getElementById("porcentual").innerText=parseInt(porcentaje*100)+"%";

}

const ir_a=()=>{
    let nodo=document.getElementById("video_1");
    nodo.currentTime=160;
    //console.dir(document.getElementById("file"));
    document.getElementById("file").nodeValue="80%";
    console.dir(document.getElementById("range"));
    document.getElementById("range").value=10;

}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    let nodo=document.getElementById("video_1");
    output.innerHTML = this.value;
    nodo.currentTime=nodo.duration*(this.value/100);
}

const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

function myStopFunction() {
  clearInterval(myInterval);
}

const reproducir=(x)=>{
    let video=document.getElementById(x);
    video.play();
}

