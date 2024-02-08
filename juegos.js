


const pepe=()=>{

    var imagenes= document.querySelectorAll("img.img_juego");
    let str="";
        
    for (let i = 0; i < imagenes.length; i++) {
       /* document.getElementById(imagenes[i].id).src="/assets/imagenes/img1.jpg";*/
       let imagen=document.getElementById(imagenes[i].id).src;
       console.log(imagen);
       str=imagen.substr((imagen.length)-5,1);
       console.log("pp: "+str);
       console.log(imagen.lastIndexOf("/"));
       console.log(imagen.substring(imagen.lastIndexOf("/")+1));
       
       
       /*console.log(imagenes[i].id);
       console.dir(imagenes[i]);*/
       console.log(imagen);
    }

}

/*indexOf()*/

/*

const GeoMaps="https://www.google.com/maps/dir/-34.7481246,-58.4001288";
const Locacion=(Posicion)=>{
    console.log(Posicion);
    console.log(Posicion.coords.latitude)
    //latitude: -34.7405097, longitude: -58.4251941
    alert("https://www.google.com/maps/dir/"+Posicion.coords.latitude+","+Posicion.coords.longitude);
}

const FallaLocacion=(FallaGeo)=>{
    console.log(FallaGeo);
    alert(FallaGeo.code);
    switch(FallaGeo.code) {
        case 1:
            alert("El usuario no permite ser geolocalizado");
          break;
        case 2:
            alert("No se pudo geolocalizar");
          break;
        default:
            alert("Tiempo de espera superado");
    }
    
}

config={
    enabledHighAccurancy:false,
    timeout:10000
}

navigator.geolocation.getCurrentPosition(Locacion,FallaLocacion,config);
*/

//dragstart-dragend-drag

//dragenter-dragleave-dragover-drop

const Inicio_drag=(event)=>{
    console.log(event.target.id);
    event.dataTransfer.setData("Text", event.target.id);


}

const sobre_target=(event)=>{
    console.log("sobre_target");
    event.preventDefault();
}

const soltar=(event)=>{
    event.preventDefault();
    console.log("Drop...");
    const data = event.dataTransfer.getData("Text");
    console.log(data);
    event.target.innerHTML="";
    event.target.appendChild(document.getElementById(data));
}

//pepe();

/*
https://www.google.com/maps/dir/-34.7481246,-58.4001288/-34.7481246,-58.4001288/@-34.7443172,-58.4126614,15z/data=!4m2!4m1!3e3?entry=ttu
*/
/*


let menu= document.querySelector('.menu');
let flag=false;
let contador=0;

console.dir(menu);



function iniciar(){
    
    var imagenes=document.querySelectorAll('#cajaimagenes img');
     soltar=document.getElementById('target1');  
     soltar2  =document.getElementById('target2'); 
     soltar3 = document.getElementById('target3'); 

    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
        // imagenes[i].addEventListener('dragend', finalizado, false);
    }

    soltar.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e){
    e.preventDefault(); }, false)
      
    ;
    soltar.addEventListener('drop', soltado, false);


    soltar2.addEventListener('dragenter', function(e){ 
     e.preventDefault(); }, false);
    soltar2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltado, false);


    soltar3.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar3.addEventListener('drop', soltado, false);

}
function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function soltado(e){
    e.preventDefault();
    console.log(e)
    let id=e.dataTransfer.getData('Text');
    let imagen=document.getElementById(id);
    imagen.style.display= 'none';
     e.target.innerHTML='<img src="'+imagen.src+'" height="400px" width="275px">';
    contador++


}
function reinicio() {
    window.location.reload();
}
iniciar()
//window.addEventListener('load', iniciar, false);
*/