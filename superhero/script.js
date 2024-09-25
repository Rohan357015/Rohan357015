let button = document.querySelector('#menu .fa-bars');
let ham =document.querySelector(".ham");
let cut= document.querySelector(".fa-x");
button.addEventListener('click',()=>{
    ham.classList.toggle("active");
    
});
cut.addEventListener('click',()=>{
    ham.classList.remove("active");
    
})