const hamburger = document.querySelector(".hamburger");
const navmanu = document.querySelector(".nav-manu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmanu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=> n.addEventListener("click",() => {
    hamburger.classList.remove("active")
    navmanu.classList.remove("active")
}))


const togglelcon = document.querySelector('.toggle-icon');

togglelcon.addEventListener('click', ()=>{
    togglelcon.classList.toggle('bx-son');
    document.body.classList.toggle('dark-mode');
});