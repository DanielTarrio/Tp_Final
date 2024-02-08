
let validacion={};
let i=0;
let exito=0;
let parrafo="";
let objImg="";
let archivo=[];

const Inicio_drag=(event)=>{
    //console.log(event.target.id);
    event.dataTransfer.setData("Text", event.target.id);
}

const sobre_target=(event)=>{
    //console.log("sobre_target");
    event.preventDefault();
}

const soltar=(event)=>{
    event.preventDefault();
    const data = event.dataTransfer.getData("Text");
    //console.log(data);
    validacion[i]={
        imagen:img_file(img_file(document.getElementById(data).src)),
        imagen_id:data,
        target:event.target.id
    }
    i++;
    parrafo=event.target.outerHTML;
    event.target.innerHTML="";
    event.target.appendChild(document.getElementById(data));
    document.getElementById(data).draggable=false;
    document.getElementById(event.target.id).classList.remove("target");//cambio de estilo, elimina bordes area target
    document.getElementById(event.target.id).classList.add("target2");
    document.getElementById("target_padre").classList.remove("target_container"); //cambia estilo para eliminar y bordes el gap 10px
    document.getElementById("target_padre").classList.add("target_container2");
    if(i===3){
        verificar();
    }
}

const verificar=()=>{
    console.log(validacion);
    for (let j = 0; j < i; j++) {
        console.log("j:"+j);
        if(validacion[j].target==("target1") && parseInt(validacion[j].imagen)===1){
            exito++;
        }
        if(validacion[j].target==("target2") && parseInt(validacion[j].imagen)===2){
            exito++;
        }
        if(validacion[j].target==("target3") && parseInt(validacion[j].imagen)===3){
            exito++;
        }
    }
    if(exito===3){
        console.log(document.getElementById("titulo"));
        document.getElementById("titulo").innerHTML="Muy bien!!!, lo lograste!!!"
    }else{
        document.getElementById("titulo").innerHTML="Inténtalo de nuevo, tu puedes!!!"
    }
}

const img_file=(x)=>{
    str=x.substr((x.length)-5,1);
    return str;
}

const reset=()=>{
    
    for (let y = 0; y < i; y++) {

        objImg=document.getElementById(validacion[y].imagen_id);
        document.getElementById("imagen_container").appendChild(objImg);
        objImg.draggable=true;
        archivo[y]=objImg.src;
        console.log("-------");
        document.getElementById(validacion[y].target).classList.remove("target2");//cambio de estilo, elimina bordes area target
        document.getElementById(validacion[y].target).classList.add("target");
        document.getElementById(validacion[y].target).innerHTML="<p>Arrastre y suelte la imágene aquí</p>";

    }
    console.log(archivo);
    document.getElementById("target_padre").classList.remove("target_container2"); //cambia estilo para eliminar y bordes el gap 10px
    document.getElementById("target_padre").classList.add("target_container");
    document.getElementById("titulo").innerHTML="Armemos el rompecabezas y veamos que imagen es...";

    let orden=[];
    for (let x = 0; x < i; x++) {
        orden[x]=x;
    }
    orden.sort(function(){return 0.5 - Math.random()});
    console.log(orden);
    for (let z = 0; z < orden.length; z++) {
    
        objImg=document.getElementById(validacion[z].imagen_id);
        console.dir(objImg);
        console.log(archivo);
        objImg.src=archivo[orden[z]];
        console.dir(objImg);

    }

    validacion={};
    i=0;
    exito=0;
    parrafo="";
    archivo=[];
    
}
