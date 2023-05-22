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
            width: 98vw;
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
        
        @media(max-width: 400px) {
            .separador__image {
                height: 15px;
                width: 90vw;
            }
        }

        @media(max-width: 600px) {
            .separador__image {
                height: 15px;
                width: 90vw;
            }
        }
        
        
        `
        return css
    }

    component() {
        const header = document.createElement('header')
        header.classList.add('header__cabecalho')

        const ancoraLogo = document.createElement('a')
       ancoraLogo.href = `https://www.leagueoflegends.com/pt-br/?utm_source=riotbar&utm_medium=productcard%2Bwww.riotgames.com&utm_campaign=lol&utm_content=lol_keyart01`

        const fotoLogo = document.createElement('img')
        fotoLogo.classList.add('logo__image')
        fotoLogo.src = this.logo

        ancoraLogo.append(fotoLogo)
        const fotoSeparador = document.createElement('img')
        fotoSeparador.classList.add('separador__image')
        fotoSeparador.src = this.separador
        

        header.append(
            ancoraLogo,
            fotoSeparador
        )

        return header
        
    }

}

customElements.define('header-default', cabecalho)