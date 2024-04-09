function app() {
    const btn = document.querySelector(".section__1--link")
    btn.addEventListener("click",(e)=>{
        e.preventDefault()
        window.location.href = "../../index.html";
    }) 
}
app()