'use strict'



class rodape extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({mode:'open'})
        this.teste = null
    }

    static get observedAttributes() {
        return['teste']
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
            .footer__rodape {
                width: 99vw;
                height: 224px;
                background-color: rgb(38, 38, 51, 0.5);
                backdrop-filter: blur(2px);
                display: flex;
                justify-content: space-evenly;
                flex-direction: column;
                align-items: center;
                padding: 5px;
            }
            
            .info__footer {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-evenly;
                width: 100%;
                
            }

            .separador__info {
                width: 2px;
                height: 89px;
                background: #423620;
            }

            .list__info {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .list__info p {
                color: white;
                cursor: pointer;
            }

            .icon {
                height: 25px;
                width: 20px;
                color: #937333;
            }

            .separador__footer {
                width: 80%;
                height: 2px;
                background: #423620;
            }

            .autor {
                color: white;
            }
        `
        return css
    }

    component() {
        const footer = document.createElement('footer')
        footer.classList.add('footer__rodape')

        const info__footer = document.createElement('div')
        info__footer.classList.add('info__footer')


        //
        const list__info = document.createElement('div')
        list__info.classList.add('list__info')

        //
        const riot__link = document.createElement('p')
        riot__link.textContent = "RiotGames"

        const suport__link = document.createElement('p')
        suport__link.textContent = "Suporte"


        //
        const separador__info = document.createElement('div')
        separador__info.classList.add('separador__info')

        
        //
        const list__links = document.createElement('div')

        const facebook_link = document.createElement('ion-icon')
        facebook_link.setAttribute('name','logo-facebook')
        facebook_link.classList.add('icon')

        const twitter_link = document.createElement('ion-icon')
        twitter_link.setAttribute('name','logo-twitter')
        twitter_link.classList.add('icon')

        const linkedin_link = document.createElement('ion-icon')
        linkedin_link.setAttribute('name','logo-linkedin')
        linkedin_link.classList.add('icon')

        const github_link = document.createElement('ion-icon')
        github_link.setAttribute('name','logo-github')
        github_link.classList.add('icon')

        const figma_link = document.createElement('ion-icon')
        figma_link.setAttribute('name','logo-figma')
        figma_link.classList.add('icon')

        //
        const separador__footer = document.createElement('div')
        separador__footer.classList.add('separador__footer')
        
        const autor = document.createElement('p')
        autor.classList.add('autor')
        autor.textContent = "Marcelo @ 2023 Copyright"

        list__links.append(
            facebook_link,
            twitter_link,
            linkedin_link,
            github_link,
            figma_link,
        )

        list__info.append(
            riot__link,
            suport__link
        )

        info__footer.append(
            list__info,
            separador__info,
            list__links

        )

        footer.append(
            info__footer,
            separador__footer,
            autor
        )

        return footer
    }
}

customElements.define('footer-default', rodape)