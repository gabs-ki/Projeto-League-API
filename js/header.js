'use strict'

//ShadowDOM

//Esqueleto

class cabecalho extends HTMLElement {
    constructor() {

        //Minha criação de classe
        super()

        this.shadow = this.attachShadow({mode:'open'})
        this.logo = `./img/logo.png`
        this.separador = `./img/HeaderDivider.png`
    }

    static get observedAttributes() {
        return['logo', 'separador']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `

        .header__cabecalho {
            width: 100vw;
            height: 128px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            padding-top: 6px;
            padding-bottom: 6px;
        }

        .logo__image {
            cursor: pointer;
            height: 44px;
            width: 121px;
        }

        .logo__image:hover {
            height: 49px;
            width: 130px;
        }

        .separador__image {
            height: 47px;
            width: 90vw;
        }
        
        
        
        `
        return css
    }

    component() {
        const header = document.createElement('header')
        header.classList.add('header__cabecalho')

        const fotoLogo = document.createElement('img')
        fotoLogo.classList.add('logo__image')
        fotoLogo.src = this.logo

        const fotoSeparador = document.createElement('img')
        fotoSeparador.classList.add('separador__image')
        fotoSeparador.src = this.separador
        

        header.append(
            fotoLogo,
            fotoSeparador
        )

        return header
        
    }

}

customElements.define('header-default', cabecalho)