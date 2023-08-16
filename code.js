"use strict";

const zone = document.querySelector(".zone");
zone.addEventListener("dragover", (e)=>{
    e.preventDefault();
})
zone.addEventListener("drop", (e)=>{
    let n = e.dataTransfer.getData("texture");
    zone.style.background = `url("texture${n}.png")`;
})

for (let i = 1; i< document.querySelector(".textures").children.length + 1; i++){
    document.querySelector(`.texture${i}`).addEventListener("dragstart",(e)=>changeTexture(i,e));
}

const changeTexture = (n,e) =>{
    e.dataTransfer.setData("texture",n);
}




