const cards=document.querySelectorAll(".service-card");
const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.25
});

cards.forEach(card=>{

observer.observe(card);

});

const hamicon = document.querySelector(".hamicon");
const dropdown=document.querySelector(".hamburger");
if(hamicon){
hamicon.addEventListener("click",function(){
    dropdown.classList.toggle("show");
})}