export function openBurger() {
    const burger = document.querySelector(".burger--container");
    const closeBtn = document.querySelector(".nav__mobile__close--btn")
    burger.addEventListener("click",toggleNav.bind(null,burger))
    closeBtn.addEventListener("click",toggleNav.bind(null,burger))
}

export function toggleUserSignIn() {
    const userLogo = document.querySelector(".container__signup--img")
    userLogo.addEventListener("click",()=>{
        const nav = document.querySelector(".nav__desctop--signup")
        nav.classList.toggle("display")
    })
}
function toggleNav(burger) {
    const navigation= document.querySelector(".nav__main--mobile")
        burger.classList.toggle("display") 
        navigation.classList.toggle("display") 
}
