const hamburger = document.querySelector(".hamburger");
const navlink = document.querySelector(".navLinks");


hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("active");
    navlink.classList.toggle("active");

})
document.querySelectorAll(".link").forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navlink.classList.remove("active");
    
}));