'use strict'

import '../router.js'

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
        this.classeTitulo = "Função"
        this.leagueUniverso = `https://universe.leagueoflegends.com/pt_BR/`
        this.imageUniverso = `./img/leagueUniverse.png`
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

            .icone__universo {
                width: 83px;
                height: 83px;
                background: #14141b80;
                border: 1px solid #664C1C;
                backdrop-filter: blur(2px);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 80%;
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
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: relative;
                z-index: 1;
            }

            .container__classe {
                background-color: #0A0A0D;
                background: rgba(20, 20, 27, 0.5);
                border: 1px solid #664C1C;
                backdrop-filter: blur(2px);
                height: 83px;
                width: 242px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                z-index: 1;
            }

            

            .icone__classe {
                width: 82px;
                height: 82px;
                background: rgba(20, 20, 27, 0.5);
                border: 1px solid #664C1C;
                backdrop-filter: blur(2px);
            }

            .classe__campeao {
                height: 24px;
                color: #F5DAA6;
                font-weight: 300;
                font-size: 1rem;
                letter-spacing: 0.05em;
                position: absolute;
                top: 25%;
            }

            .classe__titulo {
                background: linear-gradient(180deg, #A68749 0%, #574121 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                position: absolute;
                top: -1%;
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

            

            .voltar {
                transform: scaleX(-1);
            }

            .icone__interno {
                position: absolute;
                width: 5.5vw;
                height: 12vh;
            }

           

            .image__universo {
                width: 60px;
                height: 60px;
            }

            .universe__info {
                width: 50%;
                display: flex;
                align-items: center;
                justify-content: end;
                position: relative;
            }


            
            @media(max-width: 400px) {
                .descricao__campeao {
                    font-size: 0.5rem;
                }
            }

            @media(max-width: 500px) {
                .descricao__campeao {
                    font-size: 0.5rem;
                }
            }

            @media(max-width: 1500px) {
                .descricao__campeao {
                    font-size: 0.8rem;
                }
            }

        `
        
        return css
    }

    component() {
        const containerCampeao = document.createElement('div')
        containerCampeao.classList.add('container__campeao')
        containerCampeao.id = 'teste'

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

        const containerUniverseInfo = document.createElement('div')
        containerUniverseInfo.classList.add('universe__info')

        const iconeClasseCampeao = document.createElement('img')
        iconeClasseCampeao.src = this.iconeClasseCampeao
        iconeClasseCampeao.classList.add('icone__classe')

        const classeTitulo = document.createElement('p')
        classeTitulo.textContent = this.classeTitulo
        classeTitulo.classList.add('classe__titulo')

        const classeCampeao = document.createElement('p')
        classeCampeao.textContent = this.classeCampeao
        classeCampeao.classList.add('classe__campeao')

        const containerTitulo = document.createElement('div')
        containerTitulo.classList.add('container__titulo')

        containerTitulo.append (
            classeTitulo,
            classeCampeao
        )


        const containerClasse = document.createElement('div')
        containerClasse.classList.add('container__classe')

        containerClasse.append (
            iconeClasseCampeao,
            containerTitulo
        )

        //Descricao do Campeao

        const descricaoCampeao = document.createElement('p')
        descricaoCampeao.textContent = this.descricaoCampeao
        descricaoCampeao.classList.add('descricao__campeao')

        //

        const iconeUniverso = document.createElement('a')
        iconeUniverso.classList.add('icone__universo')
        iconeUniverso.href = this.leagueUniverso

        const imageUniverso = document.createElement('img')
        imageUniverso.classList.add('image__universo')
        imageUniverso.src = this.imageUniverso

        iconeUniverso.append (
            imageUniverso
        )
        

        // Container com a classe a descrição e o icone do universo

        const conteudoDescricao = document.createElement('div')
        conteudoDescricao.classList.add('conteudo__descricao')

        //

        
        

        //
       

        containerUniverseInfo.append (
            containerClasse,
            iconeUniverso
        )

        conteudoDescricao.append (
            descricaoCampeao,
            containerUniverseInfo
        )

        

        containerCampeao.append (
            imageCampeao,
            tituloCampeao,
            conteudoDescricao
        )

        return containerCampeao
    }
}
customElements.define('content-champion', campeao)