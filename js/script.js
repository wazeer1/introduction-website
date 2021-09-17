let firstslide=document.querySelector("#gallery .gall .container");
let secondslide=document.querySelector("#gallery .gall .container2");
let thirdslide=document.querySelector("#gallery .gall .container3");
let one=document.querySelector("#gallery .gall .arrows span.one");
let two=document.querySelector("#gallery .gall .arrows span.two");
let three=document.querySelector("#gallery .gall .arrows span.three");
let buttons=document.querySelectorAll("#gallery .gall .arrows span")

one.addEventListener("click",(e)=>{
    if(firstslide.classList.contains("active")){
        return;
    }else{
        firstslide.classList.add("active");
        firstslide.classList.add("anime");
    }
    if(secondslide.classList.contains("active") || thirdslide.classList.contains("active")){
        secondslide.classList.remove("active");
        thirdslide.classList.remove("active");
    }
})
two.addEventListener("click",(e)=>{
    if(secondslide.classList.contains("active")){
        return;
    }else{
        secondslide.classList.add("active");
        secondslide.classList.add("anime");
    }
    if(firstslide.classList.contains("active") || thirdslide.classList.contains("active")){
        firstslide.classList.remove("active");
        thirdslide.classList.remove("active");
    }
})
three.addEventListener("click",(e)=>{
    if(thirdslide.classList.contains("active")){
        return;
    }else{
        thirdslide.classList.add("active");
        thirdslide.classList.add("anime");
    }
    if(firstslide.classList.contains("active") || secondslide.classList.contains("active")){
        firstslide.classList.remove("active");
        secondslide.classList.remove("active");
    }
})
buttons.forEach(btn =>{
    btn.addEventListener("click",function(){
        buttons.forEach(btton=>btton.classList.remove("active"))
        this.classList.add("active");
    })
})

