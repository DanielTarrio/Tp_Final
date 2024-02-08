
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
    document.getElementById(data).draggable=false;
    //event.target.style.border="0px";
    document.getElementById(event.target.id).style.border="0px";
    document.getElementById("#target_padre").style.gap="0px";
    console.log(document.getElementsByClassName("target_padre"));
}