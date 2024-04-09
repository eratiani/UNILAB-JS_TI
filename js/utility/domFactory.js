export class DomFactory{
    constructor(container){
    this.element =null
    this.container = document.querySelectorAll(container)[0]
    this.fragment = document.createDocumentFragment();
    this.parentElement = null
    }
    createElement(elementType){
    this.element = document.createElement(elementType)
        return this
    }
    setElementAsParent(){
        this.parentElement = this.element
        return this
    }
    setImgSrc(src){
        this.element.src = src
        return this
    }
    addTextContent(textContent){
        this.element.textContent = textContent
        return this
    }
    addClass(className){
        this.element.classList.add(className)
        return this
    }
    appendToParent(){
        this.parentElement.append(this.element)
        return this
    }
    appendToImmideateChild(){
        this.parentElement.children[0].append(this.element)
        return this
    }
    appendToFragment(){
        this.fragment.append(this.element)
        return this
    }
    appendToDOM(){
        this.container.append(this.fragment)
    }

}
