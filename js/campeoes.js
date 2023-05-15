

import "./router.js"
import { linguas } from "./tradução/classes.js"


export const carregarCampeoes = async (nome, dados) => {

    const splashChamp = document.createElement('div')
    splashChamp.id = 'tela__splash__id'

    const container = document.getElementById('container')

    container.append(
        splashChamp
    )

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

        if (((dados[0][1].tags[0]).toString()).toUpperCase() == (arrayDeClasses[0][0].toString()).toUpperCase()) {

            conteudoCampeoes.classeCampeao = arrayDeClasses[0][1].toUpperCase()

        }

    })

    conteudoCampeoes.imageIconeCampeao = `http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${nome}.png`

    const classe = ((dados[0][1].tags[0]).toString()).toLowerCase()

    conteudoCampeoes.iconeClasseCampeao = `https://universe.leagueoflegends.com/images/role_icon_${classe}.png`

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

    molduraCampeao.append(
        iconeCampeao,
        iconeMoldura,
        iconeMolduraInterna
    )

    // Evento para mostrar a splash art do campeão
    molduraCampeao.addEventListener('click', () => {
        splashChamp.classList.remove('testeB')
        splashChamp.classList.add('testeA')


        splashChamp.replaceChildren(
            gerarTelaSplash(dados, nome)
        )
    })


    //Menu
    const ancoraMenu = document.createElement('a')
    ancoraMenu.href = '/classes'

    const iconeMenu = document.createElement('ion-icon')
    iconeMenu.setAttribute('name', 'menu-outline')
    iconeMenu.classList.add('icon')
    iconeMenu.classList.add('menu')

    ancoraMenu.addEventListener('click', () => {
        window.localStorage.setItem('path', ancoraMenu.href)
        route()
    })

    ancoraMenu.append(
        iconeMenu
    )

    //Voltar
    const ancoraVoltar = document.createElement('a')
    ancoraVoltar.href = '/'

    const iconeVoltar = document.createElement('ion-icon')
    iconeVoltar.setAttribute('name', 'arrow-redo')
    iconeVoltar.classList.add('icon')
    iconeVoltar.classList.add('voltar')
    iconeVoltar.id = 'Voltar'

    ancoraVoltar.addEventListener('click', () => {
        window.localStorage.setItem('path', ancoraVoltar.href)
        route()
    })

    ancoraVoltar.append(
        iconeVoltar
    )

    //Adicionando conteudo no navegador posterior
    navegadorPosterior.append(
        ancoraVoltar,
        molduraCampeao,
        ancoraMenu
    )

    navegador.append(
        navegadorPosterior
    )

    champion.append(
        conteudoCampeoes
    )

    container.append(
        navegador
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

const gerarTelaHabilidades = (dados, nome) => {

    const telaSplashArt = document.createElement('div')
    telaSplashArt.classList.add('tela__habilidades')
    telaSplashArt.id = 'tela__splash__art'

    //Botão superior 

    const navegadorSuperiorSplash = document.createElement('div')
    navegadorSuperiorSplash.classList.add('navegador__superior__skill')

    const containerBotaoSuperior = document.createElement('div')
    containerBotaoSuperior.classList.add('container__botao__superior')

    const botaoSuperior = document.createElement('ion-icon')
    botaoSuperior.setAttribute('name', 'chevron-down-outline')
    botaoSuperior.classList.add('botao__superior')

    const containerIconeBotaoSuperior = document.createElement('div')
    containerIconeBotaoSuperior.classList.add('container__icone__botao__superior')

    containerIconeBotaoSuperior.appendChild(
        botaoSuperior
    )

    containerIconeBotaoSuperior.addEventListener('click', () => {
        const tela = document.getElementById('tela__splash__art')
        tela.classList.remove('tela__splash__art')
        tela.classList.add('tela__splash__art__removida')
    })

    containerBotaoSuperior.append(
        navegadorSuperiorSplash,
        containerIconeBotaoSuperior
    )

    //

    const containerSplashCampeao = document.createElement('div')
    containerSplashCampeao.classList.add('container__skills__campeao')

    //

    const tituloPaginaHabilidades = document.createElement('div')
    tituloPaginaHabilidades.classList.add('titulo__pagina__habilidades')

    const iconePaginaHabilidades = document.createElement('img')
    iconePaginaHabilidades.classList.add('icone__pagina__habilidades')
    iconePaginaHabilidades.src = `./img/iconHabilidades.svg`

    const textoPaginaHabilidades = document.createElement('h1')
    textoPaginaHabilidades.classList.add('texto__pagina_habilidades')
    textoPaginaHabilidades.textContent = 'Habilidades'

    tituloPaginaHabilidades.append (
        iconePaginaHabilidades,
        textoPaginaHabilidades
    )


    const divVazia = document.createElement('div')

    const containerHabilidades = document.createElement('div')
    containerHabilidades.classList.add('container__habilidades')

    const listaHabilidades = document.createElement('div')
    listaHabilidades.classList.add('lista__habilidades')

    const passive = document.createElement('div')
    const imgPassive = document.createElement('img')
    imgPassive.src = `http://ddragon.leagueoflegends.com/cdn/13.9.1/img/passive/${dados[0][1].passive.image.full}`
    
    passive.append(
        imgPassive
    )

    passive.classList.add('passiva')
    passive.addEventListener('click', () => {

        const tituloPassiva = document.createElement('h3')
        tituloPassiva.classList.add('titulo__passiva')
        tituloPassiva.textContent = dados[0][1].passive.name

        const subTituloPassiva = document.createElement('p')
        subTituloPassiva.classList.add('subtitulo__passiva')
        subTituloPassiva.textContent = 'Passiva'

        const textoPassiva = document.createElement('p')
        textoPassiva.classList.add('texto__passiva')
        textoPassiva.textContent = dados[0][1].passive.description

        mensagem.replaceChildren(
            tituloPassiva,
            subTituloPassiva,
            textoPassiva
        )
    })

    const mensagem = document.createElement('div')
    mensagem.classList.add('container__info__habilidades')

    dados[0][1].spells.forEach((index) => {
        const habilidadesChampion = document.createElement('div')

        const imageSkils = document.createElement('img')
        imageSkils.src = `http://ddragon.leagueoflegends.com/cdn/13.9.1/img/spell/${index.image.full}`
        
        habilidadesChampion.classList.add('habilidades')
        
        habilidadesChampion.append(
            imageSkils
        )

        habilidadesChampion.addEventListener('click', () => {

            const tituloHabilidade = document.createElement('h3')
            tituloHabilidade.classList.add('titulo__habilidade')
            tituloHabilidade.textContent = index.name

            const subTituloHabilidade = document.createElement('p')
            subTituloHabilidade.classList.add('subtitulo__habilidade')
            subTituloHabilidade.textContent = index.id


            const habilidadeSelecionada = document.createElement('p')
            habilidadeSelecionada.classList.add('texto__habilidade')
            habilidadeSelecionada.textContent = index.description

            mensagem.replaceChildren(
                tituloHabilidade,
                subTituloHabilidade,
                habilidadeSelecionada
            )
        })

        listaHabilidades.append(
            habilidadesChampion
        )

    

    });

    containerHabilidades.append(
       listaHabilidades,
       passive
    )

    containerSplashCampeao.append(
        tituloPaginaHabilidades,
        containerHabilidades,
        mensagem,
        divVazia
    )

    //
    const navegadorPosteriorSplash = document.createElement('div')
    navegadorPosteriorSplash.classList.add('navegador__posterior__splash')

    //
    const ancoraSkin = document.createElement('div')
    ancoraSkin.classList.add('ancora__skin__splash')
    ancoraSkin.addEventListener('click', () => {
        const telaSkins = gerarTelaSkin(dados, nome)

        telaSplashArt.replaceChildren(
            telaSkins
        )
    })

    const ancoraChamp = document.createElement('div')
    ancoraChamp.classList.add('ancora__champ__splash')
    ancoraChamp.addEventListener('click', () => {
        const container = document.getElementById('tela__splash__id')
        const telaCampeao = gerarTelaSplash(dados, nome)

        container.replaceChildren(
            telaCampeao
        )
    })

    const iconeSkin = document.createElement('img')
    iconeSkin.classList.add('icone__skin__splash')
    iconeSkin.src = `./img/iconSkins.svg`

    const iconeChamp = document.createElement('img')
    iconeChamp.classList.add('icone__champ__splash')
    iconeChamp.src = `./img/champIcon.svg`

    ancoraSkin.append(
        iconeSkin
    )

    ancoraChamp.append(
        iconeChamp
    )

    navegadorPosteriorSplash.append(
        ancoraSkin,
        ancoraChamp
    )

    //

    telaSplashArt.append(
        containerBotaoSuperior,
        containerSplashCampeao,
        navegadorPosteriorSplash
    )


    return telaSplashArt

}

const gerarTelaSplash = (dados, nome) => {

    const telaSplashArt = document.createElement('div')
    telaSplashArt.classList.add('tela__splash__art')
    telaSplashArt.id = 'tela__splash__art'

    //Botão superior 

    const navegadorSuperiorSplash = document.createElement('div')
    navegadorSuperiorSplash.classList.add('navegador__superior__splash')


    const containerBotaoSuperior = document.createElement('div')
    containerBotaoSuperior.classList.add('container__botao__superior')

    const botaoSuperior = document.createElement('ion-icon')
    botaoSuperior.setAttribute('name', 'chevron-down-outline')
    botaoSuperior.classList.add('botao__superior')

    const containerIconeBotaoSuperior = document.createElement('div')
    containerIconeBotaoSuperior.classList.add('container__icone__botao__superior')

    containerIconeBotaoSuperior.appendChild(
        botaoSuperior
    )

    containerIconeBotaoSuperior.addEventListener('click', () => {
        const getTelaSplash = document.getElementById('tela__splash__id')

        getTelaSplash.classList.add('testeA')
        getTelaSplash.classList.add('testeB')

        telaSplashArt.classList.remove('tela__splash__art')
        telaSplashArt.classList.add('tela__splash__art__removida')
    })

    containerBotaoSuperior.append(
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

    tituloSplashCampeao.append(
        nomeSplashCampeao,
        subNomeSplashCampeao
    )

    const molduraSplashCampeao = document.createElement('img')
    molduraSplashCampeao.classList.add('moldura__splash__campeao')
    molduraSplashCampeao.src = './img/splashAccessory.svg'

    const imageSplashCampeao = document.createElement('img')
    imageSplashCampeao.classList.add('image__splash__campeao')
    imageSplashCampeao.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nome}_0.jpg`

    containerSplashCampeao.append(
        tituloSplashCampeao,
        molduraSplashCampeao,
        imageSplashCampeao
    )


    //

    const navegadorPosteriorSplash = document.createElement('div')
    navegadorPosteriorSplash.classList.add('navegador__posterior__splash')

    //
    const ancoraSkin = document.createElement('div')
    ancoraSkin.classList.add('ancora__skin__splash')
    ancoraSkin.addEventListener('click', () => {
        const container = document.getElementById('tela__splash__art')
        const telaSkins = gerarTelaSkin(dados, nome)

        container.replaceChildren(
            telaSkins
        )

    })


    const ancoraHabilidades = document.createElement('div')
    ancoraHabilidades.classList.add('ancora__habilidades__splash')
    ancoraHabilidades.addEventListener('click', () => {

        const telaHabilidades = gerarTelaHabilidades(dados, nome)

        telaSplashArt.replaceChildren(
            telaHabilidades
        )
    })

    const iconeSkin = document.createElement('img')
    iconeSkin.classList.add('icone__skin__splash')
    iconeSkin.src = `./img/iconSkins.svg`

    const iconeHabilidades = document.createElement('img')
    iconeHabilidades.classList.add('icone__habilidades__splash')
    iconeHabilidades.src = `./img/iconHabilidades.svg`



    ancoraHabilidades.append(
        iconeHabilidades
    )

    ancoraSkin.append(
        iconeSkin
    )

    navegadorPosteriorSplash.append(
        ancoraSkin,
        ancoraHabilidades
    )


    //

    telaSplashArt.append(
        containerBotaoSuperior,
        containerSplashCampeao,
        navegadorPosteriorSplash
    )




    return telaSplashArt
}

const gerarTelaSkin = (dados, nome) => {


    const telaSplashArt = document.createElement('div')
    telaSplashArt.classList.add('tela__habilidades__splash')
    telaSplashArt.id = 'tela__splash__art'

    //Botão superior 

    const navegadorSuperiorSplash = document.createElement('div')
    navegadorSuperiorSplash.classList.add('navegador__superior__splash')


    const containerBotaoSuperior = document.createElement('div')
    containerBotaoSuperior.classList.add('container__botao__superior')

    const botaoSuperior = document.createElement('ion-icon')
    botaoSuperior.setAttribute('name', 'chevron-down-outline')
    botaoSuperior.classList.add('botao__superior')

    const containerIconeBotaoSuperior = document.createElement('div')
    containerIconeBotaoSuperior.classList.add('container__icone__botao__superior')

    containerIconeBotaoSuperior.appendChild(
        botaoSuperior
    )

    containerIconeBotaoSuperior.addEventListener('click', () => {
        const removerTelaSplash = document.getElementById('tela__splash__art')
        telaSplashArt.classList.remove('tela__habilidades__splash')
        removerTelaSplash.classList.add('testeB')
    })

    containerBotaoSuperior.append(
        navegadorSuperiorSplash,
        containerIconeBotaoSuperior
    )

    //

    const containerSplashCampeao = document.createElement('div')
    containerSplashCampeao.classList.add('container__skin__campeao')

    const tituloPaginaSkins = document.createElement('div')
    tituloPaginaSkins.classList.add('titulo__pagina__skins')

    const iconSkins = document.createElement('div')
    iconSkins.classList.add('icon_skins_titulo')
    const iconePagina = document.createElement('img')
    iconePagina.classList.add('icone__pagina__skins')
    iconePagina.src = `./img/iconSkins.svg`
    

    const tituloPagina = document.createElement('h1')
    tituloPagina.classList.add('titulo__paginas')
    tituloPagina.textContent = 'Skins'

    iconSkins.append(
        iconePagina
    )

    tituloPaginaSkins.append(
        iconSkins,
        tituloPagina
    )


    const containerCarrouselCampeao = document.createElement('div')
    containerCarrouselCampeao.classList.add('carrousel')
    containerCarrouselCampeao.id = 'carrousel'


    const molduraSkin = document.createElement('img')
    molduraSkin.classList.add('moldura__skin')
    molduraSkin.src = `./img/molduraSkins.svg`

    containerSplashCampeao.append(
        containerCarrouselCampeao,
        molduraSkin
    )

    const botaoLeft = document.createElement('div')
    botaoLeft.classList.add('botao__left__skin')

    const iconLeft = document.createElement('ion-icon')
    iconLeft.setAttribute('name', 'chevron-back-outline')
    iconLeft.classList.add('icon__left')

    const botaoRight = document.createElement('div')
    botaoRight.classList.add('botao__right__skin')

    const iconRight = document.createElement('ion-icon')
    iconRight.setAttribute('name', 'chevron-forward-outline')
    iconRight.classList.add('icon__right')


    dados[0][1].skins.forEach((index) => {

        const divSkins = document.createElement('div')
        divSkins.classList.add('container__skins')

        const skinSplash = document.createElement('img')
        

        skinSplash.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nome}_${index.num}.jpg`

        if (index.num == 0) {
            skinSplash.classList.add('selected')
            botaoLeft.addEventListener('click', () => {

                skinSplash.classList.remove('selected')
                skinSplash.classList.add('image__skin')
            })
        } else {
            skinSplash.classList.add('image__skin')
        }

        divSkins.append(
            skinSplash

        )

        containerCarrouselCampeao.append(
            divSkins
        )


    });

    let currentImageIndex = 0

    botaoLeft.addEventListener('click', () => {
        let images = document.querySelectorAll("#carrousel img"),
            max = images.length
    
        
        images[currentImageIndex].classList.remove('selected')
       
        currentImageIndex--
       

        if (currentImageIndex <= 0) {
            
            currentImageIndex = max
        } else {
            
            images[currentImageIndex].classList.add('selected')
        }

        


    })

    botaoRight.addEventListener('click', () => {
        let images = document.querySelectorAll("#carrousel img"),
        max = images.length

        currentImageIndex++
        images[currentImageIndex].classList.remove('selected')
       

        if (currentImageIndex >= max) {
            currentImageIndex = 0
        }

        images[currentImageIndex].classList.add('selected')

       
    })

    botaoRight.append(
        iconRight
    )

    botaoLeft.append(
        iconLeft
    )

    containerSplashCampeao.append(
        botaoLeft,
        botaoRight,
        tituloPaginaSkins
    )

    const navegadorPosteriorSplash = document.createElement('div')
    navegadorPosteriorSplash.classList.add('navegador__posterior__splash')

    //
    const ancoraChamp = document.createElement('div')
    ancoraChamp.classList.add('ancora__champ__splash')
    ancoraChamp.addEventListener('click', () => {
        const container = document.getElementById('tela__splash__id')
        const telaCampeao = gerarTelaSplash(dados, nome)

        container.replaceChildren(
            telaCampeao
        )

    })


    const ancoraHabilidades = document.createElement('div')
    ancoraHabilidades.classList.add('ancora__habilidades__splash')
    ancoraHabilidades.addEventListener('click', () => {

        const telaHabilidades = gerarTelaHabilidades(dados, nome)

        telaSplashArt.replaceChildren(
            telaHabilidades
        )
    })

    const iconeChamp = document.createElement('img')
    iconeChamp.classList.add('icone__champ__splash')
    iconeChamp.src = `./img/champIcon.svg`

    const iconeHabilidades = document.createElement('img')
    iconeHabilidades.classList.add('icone__habilidades__splash')
    iconeHabilidades.src = `./img/iconHabilidades.svg`



    ancoraHabilidades.append(
        iconeHabilidades
    )

    ancoraChamp.append(
        iconeChamp
    )

    navegadorPosteriorSplash.append(
        ancoraChamp,
        ancoraHabilidades
    )


    //

    telaSplashArt.append(
        containerBotaoSuperior,
        containerSplashCampeao,
        navegadorPosteriorSplash
    )




    return telaSplashArt
}

