import { openBurger,toggleUserSignIn } from "./utility/utility.js";
import { DomFactory } from "./utility/domFactory.js";
import { carouselMain } from "./db/db.js";
const app = function () {
    let itemsOnCarousel
    const width = document.body.clientWidth
    width <768 &&  (itemsOnCarousel = 1)
    width <1100 && width >=768 && (itemsOnCarousel = 2)
     width >=1000 && (itemsOnCarousel = 4)
    openBurger()
    toggleUserSignIn()
    const container = document.querySelector(".sec__4__container--cards")
    container.innerHTML = ""
    carouselMain.forEach((card,i)=>{
        if (i<itemsOnCarousel) {
            generateCarousel(card)
        }
    })
    carousel(itemsOnCarousel)
}
app()
function carousel(itemsOnCarousel) {
    let currPage = 0
    const btnLeft = document.querySelector(".sec__4__carousel--left")
    const btnRight = document.querySelector(".sec__4__carousel--right")
    btnLeft.addEventListener("click",()=>{
        
        if (currPage<=0) return
        const container = document.querySelector(".sec__4__container--cards")
        container.innerHTML = ""    
        currPage--
        carouselMain.slice(currPage).forEach((card,i)=>{
            if (i<itemsOnCarousel) {
                generateCarousel(card)
            }
        })

    })
    btnRight.addEventListener("click",()=>{
        if (currPage>=carouselMain.length - itemsOnCarousel) return
        const container = document.querySelector(".sec__4__container--cards")
         container.innerHTML = ""
        currPage++
        carouselMain.slice(currPage).forEach((card,i)=>{
            if (i<itemsOnCarousel) {
                generateCarousel(card)
            }
        })
    })
    
}
function generateCarousel(obj) {
    
    const factory = new DomFactory(".sec__4__container--cards")
    ///// create image container
    factory
    .createElement("div")
    .addClass("sec__4__container--card")
    .setElementAsParent()
    .appendToFragment()
    .createElement("div")
    .addClass("sec__4__card__container--img")
    .appendToParent()
    .createElement("img")
    .setImgSrc(obj.imgSrc)
    .addClass("sec__4__card--img")
    .appendToImmideateChild()
    .createElement("div")
    .addClass("sec__4__card__container--text")
    .appendToParent()
    .setElementAsParent()
    .createElement("h3")
    .addClass("sec__4__card--destination")
    .addTextContent(obj.destination)
    .appendToParent()
    .createElement("p")
    .addClass("sec__2__card--people")
    .addTextContent(obj.people )
    .appendToParent()
    .createElement("p")
    .addClass("sec__2__card--price")
    .addTextContent(obj.price)
    .appendToParent()
    .appendToDOM();
}