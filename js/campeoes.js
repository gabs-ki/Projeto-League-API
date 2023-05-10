

import "./router.js"
import { linguas } from "./tradução/classes.js"

// const idCampeao = window.localStorage.getItem('campeao')

// const campeaoApi = await pegarCampeaoApi(idCampeao)


export const carregarCampeoes = async (nome, dados) => {

    const container = document.getElementById('container')
    const champion = document.getElementById('champion')
    const navegador = document.getElementById('navegacaoPosterior')


    //Conteudo da página campeao
    const conteudoCampeoes = document.createElement('content-champion')
        conteudoCampeoes.imageCampeao = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nome}_0.jpg`
        conteudoCampeoes.nomeCampeao = ((dados[0][1].name).toString()).toUpperCase()
        conteudoCampeoes.subNomeCampeao = ((dados[0][1].title).toString()).toUpperCase()
        conteudoCampeoes.descricaoCampeao = dados[0][1].lore

        linguas["pt-BR"].classes.forEach((nomeClasse) => {

            const arrayDeClasses = Object.entries(nomeClasse)

            if(((dados[0][1].tags[0]).toString()).toUpperCase() == (arrayDeClasses[0][0].toString()).toUpperCase()) {
            
                conteudoCampeoes.classeCampeao = arrayDeClasses[0][1].toUpperCase()
               
            }

        })

        
        

        
        conteudoCampeoes.imageIconeCampeao = `http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${nome}.png`
 
        const classe = ((dados[0][1].tags[0]).toString()).toLowerCase()
    
        conteudoCampeoes.iconeClasseCampeao = `https://universe.leagueoflegends.com/images/role_icon_${classe}.png`
  

    //

    const telaSplashArt = document.createElement('div')
    telaSplashArt.classList.add('tela__splash__art__removida')
    
    //Botão superior 

        const navegadorSuperiorSplash = document.createElement('div')
        navegadorSuperiorSplash.classList.add('navegador__superior__splash')

        
        const containerBotaoSuperior = document.createElement('div')
        containerBotaoSuperior.classList.add('container__botao__superior')



        const botaoSuperior = document.createElement('ion-icon')
        botaoSuperior.setAttribute('name','chevron-down-outline')
        botaoSuperior.classList.add('botao__superior')

        const containerIconeBotaoSuperior = document.createElement('div')
        containerIconeBotaoSuperior.classList.add('container__icone__botao__superior')

        containerIconeBotaoSuperior.appendChild (
            botaoSuperior
        )

        containerIconeBotaoSuperior.addEventListener('click', () => {
            telaSplashArt.classList.remove('tela__splash__art')
            telaSplashArt.classList.add('tela__splash__art__removida')
        })

        containerBotaoSuperior.append (
            navegadorSuperiorSplash,
            containerIconeBotaoSuperior
        )

    //

    const containerSplashCampeao = document.createElement('div')
    containerSplashCampeao.classList.add('container__splash__campeao')

    const tituloSplashCampeao = document.createElement('div')
    tituloSplashCampeao.classList.add('titulo__splash__campeao')

    const nomeSplashCampeao = document.createElement('h3')
    nomeSplashCampeao.classList.add('nome__splash__campeao')
    nomeSplashCampeao.textContent = ((dados[0][1].name).toString()).toUpperCase()

    const subNomeSplashCampeao = document.createElement('p')
    subNomeSplashCampeao.classList.add('sub__nome__splash__campeao')
    subNomeSplashCampeao.textContent = ((dados[0][1].title).toString()).toUpperCase()
        
    tituloSplashCampeao.append (
        nomeSplashCampeao,
        subNomeSplashCampeao
    )

    const molduraSplashCampeao = document.createElement('img')
    molduraSplashCampeao.classList.add('moldura__splash__campeao')
    molduraSplashCampeao.src = './img/splashAccessory.svg'

    const imageSplashCampeao = document.createElement('img')
    imageSplashCampeao.classList.add('image__splash__campeao')
    imageSplashCampeao.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nome}_0.jpg`

    containerSplashCampeao.append (
        tituloSplashCampeao,
        molduraSplashCampeao,
        imageSplashCampeao
    )


    //

    const navegadorPosteriorSplash = document.createElement('div')


    //

    telaSplashArt.append (
        containerBotaoSuperior,
        containerSplashCampeao,
        navegadorPosteriorSplash
    )

    //

    const navegadorPosterior = document.createElement('div')
    navegadorPosterior.classList.add('navegador__posterior')

    const molduraCampeao = document.createElement('div')
    molduraCampeao.classList.add('moldura__campeao')
    molduraCampeao.id = 'moldura'

    const iconeCampeao = document.createElement('img')
    iconeCampeao.src = `http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${nome}.png`
    iconeCampeao.classList.add('icone__campeao')

    const iconeMoldura = document.createElement('img')
    iconeMoldura.src = `./img/championAccessory.svg`
    iconeMoldura.classList.add('icone__moldura')

    const iconeMolduraInterna = document.createElement('img')
    iconeMolduraInterna.classList.add('icone__interno')
    iconeMolduraInterna.src = `./img/iconAccessory.svg`
    
    molduraCampeao.append (
        iconeCampeao,
        iconeMoldura,
        iconeMolduraInterna
    )

    // Evento para mostrar a splash art do campeão
    molduraCampeao.addEventListener('click', () => {
        telaSplashArt.classList.remove('tela__splash__art__removida')
        telaSplashArt.classList.add('tela__splash__art')
    })

   
    //Menu
    const ancoraMenu = document.createElement('a')
    ancoraMenu.href = '/class'
    
    const iconeMenu = document.createElement('ion-icon')
    iconeMenu.setAttribute('name','menu-outline')
    iconeMenu.classList.add('icon')
    iconeMenu.classList.add('menu')

    ancoraMenu.addEventListener('click', () => {
        window.localStorage.setItem('path', ancoraMenu.href)
        route()
    })

    ancoraMenu.append (
        iconeMenu
    )

    //Voltar
    const ancoraVoltar = document.createElement('a')
    ancoraVoltar.href = '/'
    
    const iconeVoltar = document.createElement('ion-icon')
    iconeVoltar.setAttribute('name','arrow-redo')
    iconeVoltar.classList.add('icon')
    iconeVoltar.classList.add('voltar')
    iconeVoltar.id = 'Voltar'

    ancoraVoltar.addEventListener('click', () => {
        window.localStorage.setItem('path', ancoraVoltar.href)
        route()
    })

    ancoraVoltar.append (
        iconeVoltar
    )

    //Adicionando conteudo no navegador posterior
    navegadorPosterior.append (
        ancoraVoltar,
        molduraCampeao,
        ancoraMenu
    )

    navegador.append (
        navegadorPosterior
    )

    champion.append (
        conteudoCampeoes
    )

    container.append (
        navegador,
        telaSplashArt
    )
 
    // const linkMenu = document.createElement('a')
    // linkMenu.style = 'position: absolute;'
    // linkMenu.href = '/class'
    // linkMenu.textContent = 'Teste'
    // linkMenu.addEventListener('click', () => {
    //     window.localStorage.setItem('path', linkMenu.href)
    //     route()
    // })
 

    return container
}






// const cards = Object.entries(await campeaoApi)
// const testeA = Object.entries(cards[3][1])

// const gerarItems = testeA.map(teste)


// container.replaceChildren(...gerarItems)

