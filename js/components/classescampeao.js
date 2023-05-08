'use strict'

class classe extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({mode: 'open'})
        this.nomeClasse = "Classe"
        this.imageClass = null
    }

    static get observedAttributes() {
        return['nomeClasse', 'imageClass']
    }

    attributeChangedCallback(nameAttr ,oldValue ,newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        
        .container__class {
            width: 200px;
            height: 100px;
            background-color: #191922;
        }

        `
        return css
    }

    component() {
        const containerClass = document.createElement('div')
        containerClass.classList.add('container__class')
    
        return containerClass
    }

}

customElements.define('class-champion', classe)