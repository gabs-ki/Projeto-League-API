'use strict'

class classe extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({mode: 'open'})
        this.nomeClasse = "Classe"
        this.imageClass = null
        this.setaClass = null
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
            width: 18vw;
            height: 25vh;
            background-color: #191922;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
        }

        .titulo__classe {
            color: #926F2E;
            font-family: Kanit;
            font-size: 2rem;
            font-style: italic;
            font-weight: 300;
            line-height: 30px;
            letter-spacing: 0.4em;
            text-align: left;

        }

        .container__titulo {
            display: flex;
            height: 30%;
            width: 100%;
            align-items: center;
            justify-content: space-evenly;
            gap: 10px;
        }

        .icone__seta {
            height: 30px;
            width: 30px;
            color: #A47C31;
        }

        @media(max-width: 400px) {
            .container__class {
                width: 90vw;
                height: 9vh;
                justify-content: space-between;
            }

            .container__titulo {
                height: 100%;
                width: 100%;
                align-items: center;
                justify-content: space-between;
               
            }

            .titulo__classe {
                
                font-size: 1.5rem;
                font-weight: 300;
                letter-spacing: 0.2em;
                text-align: left;
                padding-left: 5%;
            }

            .image__classe {
               display: none;
            }

            .icone__seta {
                padding-right: 5%;
            }
        }

        @media(max-width: 600px) {
            .container__class {
                width: 90vw;
                height: 9vh;
                justify-content: space-between;
            }

            .container__titulo {
                height: 100%;
                width: 100%;
                align-items: center;
                justify-content: space-between;
               
            }

            .titulo__classe {
                
                font-size: 1.5rem;
                font-weight: 300;
                letter-spacing: 0.2em;
                text-align: left;
                padding-left: 5%;
            }

            .image__classe {
               display: none;
            }

            .icone__seta {
                padding-right: 5%;
            }
        }

        `
        return css
    }

    component() {
        const containerClass = document.createElement('div')
        containerClass.classList.add('container__class')

        const containerTitulo = document.createElement('div')
        containerTitulo.classList.add('container__titulo')

        const tituloClasse = document.createElement('p')
        tituloClasse.classList.add('titulo__classe')
        tituloClasse.textContent = this.nomeClasse

        const iconeSetaClasse = document.createElement('ion-icon')
        iconeSetaClasse.classList.add('icone__seta')
        iconeSetaClasse.setAttribute('name', 'play-forward')

        const imgClasse = document.createElement('img')
        imgClasse.classList.add('image__classe')
        imgClasse.src = this.imageClass

        containerTitulo.append(
            tituloClasse,
            iconeSetaClasse
        )

        containerClass.append (
            containerTitulo,
            imgClasse
        )

        return containerClass
    }

}

customElements.define('class-champion', classe)