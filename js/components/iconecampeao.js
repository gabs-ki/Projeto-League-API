'use strict'

class icone extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({mode: 'open'})
        this.nomeIconChampion = "Campeão"
        this.imageIconChampion = `./img/aa.png`
        this.imageFrameChampion = `./img/ab.png`
    }

    static get observedAttributes() {
        return['nomeIconChampion', 'imageIconChampion', 'imageFrameChampion']
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
            .icon__champion {
                display: flex;
                flex-direction: column;
                height: 135px;
                width: 120px;
                align-items: center;
                cursor: pointer;
                transition: all 0.6s;
            }

            .icon__champion:hover {
                background-color: rgba(42, 42, 53, 0.5);
                transform: scale(1.3);
                justify-content: start;
                border: 2px solid #664C1C;
                border-radius: 7px;
            }
            
            .icon__champion:hover .image__frame__icon__champion {
                transform: scale(1.07);
            }

            .icon__champion:hover p {
                width: 100%;
                height: 100%;
                text-align: center;
                border: 2px solid #664C1C;
                border-radius: 7px;
            }

            .image__icon__champion {
                width: 72px;
                height: 72px;
                border-radius: 50%;
                position: relative;
                object-fit: cover;
            }

            .image__frame__icon__champion {
                position: relative;
                top: -129px;
            }

            .nome__icon__champion {
                color: #F5DAA6;
            }
        `
        return css
    }

    component() {
        const iconChampion = document.createElement('div')
        iconChampion.classList.add('icon__champion')
        
        
        const imageChampion = document.createElement('img')
        imageChampion.classList.add('image__icon__champion')
        imageChampion.src = this.imageIconChampion

        const imageframeChampion = document.createElement('img')
        imageframeChampion.classList.add('image__frame__icon__champion')
        imageframeChampion.src = this.imageFrameChampion

        const nomeChampion = document.createElement('p')
        nomeChampion.classList.add('nome__icon__champion')
        nomeChampion.textContent = this.nomeIconChampion


        iconChampion.append (
            imageChampion,
            nomeChampion,
            imageframeChampion
        )

        return iconChampion
    }

}

customElements.define('icons-champions', icone)