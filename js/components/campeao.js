'use strict'





class campeao extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({mode: 'open'})
        this.nomeCampeao = "null"
        this.subNomeCampeao = "null"
        this.descricaoCampeao = "null"
        this.classeCampeao = "null"
        this.iconeClasseCampeao = "null"
        this.imageCampeao = null
        this.imageIconeCampeao = null
    }

    static get observedAttribute() {
        return[
            'nomeCampeao',
            'subNomeCampeao',
            'descricaoCampeao',
            'classeCampeao',
            'iconeClasseCampeao',
            'imageCampeao'
        ]
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
        
            .container__campeao {
                width: 60vw;
                height: 70vh;
                display: flex;
                position: relative;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
            }

            .image__campeao {
                border-radius: 10px;
                position: absolute;
                filter: opacity(20%) saturate(0%) blur(2px);
                box-shadow: inset 0px 4px 4px 10px rgba(0, 0, 0, 0.25);
                width: 115%;
                height: 110%;
                z-index: 0;
            }

            .nome__campeao {
                font-family: 'Encode Sans Semi Condensed', sans-serif;
                font-weight: 500;
                font-size: 4rem;
                background: linear-gradient(180deg, #A68749 0%, #574121 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                letter-spacing: 0.15em;
                padding-top: 20px;
                text-align: center;
            }

            .sub__campeao {
                position: absolute;
                top: 60%;
                font-family: 'Kanit';
                font-style: italic;
                font-weight: 300;
                font-size: 1.5rem;
                width: 150%;
                text-align: center;
                color: #F5DAA6;
                padding-bottom: 10px;
            }

            .container__titulo {
                height: 100px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: relative;
                z-index: 1;
            }

            .container__classe {
                
                z-index: 1;
            }

            .conteudo__descricao {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 95%;
                height: 296px;
                padding-bottom: 15%;
                z-index: 1;
                gap: 10px;
            }

            .descricao__campeao {
                width: 65%;
                font-family: 'Kanit';
                font-weight: 400;
                font-size: 1.6rem;
                color: white;
                z-index: 1;
            }

            .navegador__posterior {
                display: flex;
                align-items: start;
                justify-content: space-evenly;
                top: 104%;
                position: absolute;
                background-color: #664C1C;
                height: 100px;
                width: 95%;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
            }

            .icon {
                position: relative;
                top: -68%;
                color: #DBBD77;
                background: rgba(29, 29, 35, 0.8);
                border: 1px solid #916E2D;
                border-radius: 10px;
                width: 50px;
                height: 50px;
                padding: 13px; 
                cursor: pointer;
            }

            .voltar {
                transform: scaleX(-1);
            }

            .moldura__campeao {
                position: relative;
                top: -50%;
                display: flex;
                align-items: center;
                flex-direction: column;
                width: 5vw;
                height: 12vh;
                cursor: pointer;
            }

            .icone__campeao {
                position: absolute;
                top: -42%;
                width: 10vw;
                height: 22vh;
                border-radius: 50%;
                transform: scale(0.5);
            }

            .icone__moldura {
                position: absolute;
                top: -12%;
                width: 6.5vw;
                height: 14.7vh;
                z-index: 1;
            }

            .icone__interno {
                position: absolute;
                width: 5.5vw;
                height: 12vh;
            }
        `
        
        return css
    }

    component() {
        const containerCampeao = document.createElement('div')
        containerCampeao.classList.add('container__campeao')

        const imageCampeao = document.createElement('img')
        imageCampeao.src = this.imageCampeao
        imageCampeao.classList.add('image__campeao')

        //Div do titulo

        const nomeCampeao = document.createElement('h1')
        nomeCampeao.textContent = this.nomeCampeao
        nomeCampeao.classList.add('nome__campeao')

        const subNomeCampeao = document.createElement('h3')
        subNomeCampeao.textContent = this.subNomeCampeao
        subNomeCampeao.classList.add('sub__campeao')

        const tituloCampeao = document.createElement('div')
        tituloCampeao.classList.add('container__titulo')

        tituloCampeao.append (
            nomeCampeao,
            subNomeCampeao
        )

        //Div da classe

        
        const classeCampeao = document.createElement('p')
        classeCampeao.textContent = this.classeCampeao
        classeCampeao.classList.add('classe__campeao')


        const iconeClasseCampeao = document.createElement('img')
        iconeClasseCampeao.src = this.iconeClasseCampeao
        iconeClasseCampeao.classList.add('icone__classe')

        const containerClasse = document.createElement('div')
        containerClasse.classList.add('container__classe')

        containerClasse.append (
            classeCampeao,
            iconeClasseCampeao
        )

        //Descricao do Campeao

        const descricaoCampeao = document.createElement('p')
        descricaoCampeao.textContent = this.descricaoCampeao
        descricaoCampeao.classList.add('descricao__campeao')

        //

        const conteudoDescricao = document.createElement('div')
        conteudoDescricao.classList.add('conteudo__descricao')

        //

        const navegadorPosterior = document.createElement('div')
        navegadorPosterior.classList.add('navegador__posterior')

        const iconeVoltar = document.createElement('ion-icon')
        iconeVoltar.setAttribute('name','arrow-redo')
        iconeVoltar.classList.add('icon')
        iconeVoltar.classList.add('voltar')
        iconeVoltar.id = 'Voltar'

        const iconeMenu = document.createElement('ion-icon')
        iconeMenu.setAttribute('name','menu-outline')
        iconeMenu.classList.add('icon')

        //
        const molduraCampeao = document.createElement('div')
        molduraCampeao.classList.add('moldura__campeao')

        const iconeCampeao = document.createElement('img')
        iconeCampeao.src = this.imageIconeCampeao
        iconeCampeao.classList.add('icone__campeao')


        const iconeMoldura = document.createElement('img')
        iconeMoldura.src = `./img/champAccessory.png`
        iconeMoldura.classList.add('icone__moldura')

        const iconeMolduraInterna = document.createElement('img')
        iconeMolduraInterna.classList.add('icone__interno')
        iconeMolduraInterna.src = `./img/ab.png`
        
        molduraCampeao.append (
            iconeCampeao,
            iconeMoldura,
            iconeMolduraInterna
        )


        navegadorPosterior.append (
            iconeVoltar,
            molduraCampeao,
            iconeMenu
        )

        conteudoDescricao.append (
            descricaoCampeao,
            containerClasse
        )

        containerCampeao.append (
            imageCampeao,
            tituloCampeao,
            conteudoDescricao,
            navegadorPosterior
        )

        return containerCampeao
    }
}

customElements.define('content-champion', campeao)