import { openBurger,toggleUserSignIn } from "./utility/utility.js";

function app() {
    const btn = document.querySelector(".section__1--link")
    openBurger()
    toggleUserSignIn()
    btn.addEventListener("click",(e)=>{
        e.preventDefault()
        window.location.href = "../../index.html";
    }) 
}
app()