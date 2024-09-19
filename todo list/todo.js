let button=document.querySelector(".enter");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
button.addEventListener("click",function addText(){
    let list=document.createElement("li");
    list.innerText=inp.value;
    let btn=document.createElement("button");
    btn.innerText="delete";
    btn.classList.add("delete");
    list.appendChild(btn);
    ul.appendChild(list);
    inp.value="";
    
});
inp.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        let list=document.createElement("li");
    list.innerText=inp.value;
    let btn=document.createElement("button");
    btn.innerText="delete";
    btn.classList.add("delete");
    list.appendChild(btn);
    ul.appendChild(list);
    inp.value="";
    };
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName==="BUTTON"){
        let par=event.target.parentElement;
        par.remove();
    }
});
