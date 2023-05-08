import { pegarCampeaoApi} from "./leagueApi.js"

import "./router.js"

// const idCampeao = window.localStorage.getItem('campeao')

// const campeaoApi = await pegarCampeaoApi(idCampeao)


export const carregarCampeoes = async (nome, dados) => {

    const container = document.getElementById('champion')

    const conteudoCampeoes = document.createElement('content-champion')
    conteudoCampeoes.imageCampeao = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nome}_0.jpg`
    conteudoCampeoes.nomeCampeao = ((dados[0][1].name).toString()).toUpperCase()
    conteudoCampeoes.subNomeCampeao = ((dados[0][1].title).toString()).toUpperCase()
    conteudoCampeoes.descricaoCampeao = dados[0][1].lore
    conteudoCampeoes.classeCampeao = ((dados[0][1].tags[0]).toString()).toUpperCase()
    conteudoCampeoes.imageIconeCampeao = `http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${nome}.png`
 
    const classe = ((dados[0][1].tags[0]).toString()).toLowerCase()
   
    conteudoCampeoes.iconeClasseCampeao = `https://universe.leagueoflegends.com/images/role_icon_${classe}.png`
  

    //
    const navegadorPosterior = document.createElement('div')
    navegadorPosterior.classList.add('navegador__posterior')

   



    
    const molduraCampeao = document.createElement('div')
    molduraCampeao.classList.add('moldura__campeao')

    const iconeCampeao = document.createElement('img')
    iconeCampeao.src = null
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

    const iconeVoltar = document.createElement('ion-icon')
    iconeVoltar.setAttribute('name','arrow-redo')
    iconeVoltar.classList.add('icon')
    iconeVoltar.classList.add('voltar')
    iconeVoltar.id = 'Voltar'

    const ancoraMenu = document.createElement('a')
    ancoraMenu.href = '/class'
    
    const iconeMenu = document.createElement('ion-icon')
    iconeMenu.setAttribute('name','menu-outline')
    iconeMenu.classList.add('icon')
    iconeMenu.classList.add('menu')

    ancoraMenu.append (
        iconeMenu
    )

    navegadorPosterior.append (
        iconeVoltar,
        molduraCampeao,
        ancoraMenu
    )

   

    const linkMenu = document.createElement('a')
    linkMenu.style = 'position: absolute;'
    linkMenu.href = '/class'
    linkMenu.textContent = 'Teste'
    linkMenu.addEventListener('click', () => {
        window.localStorage.setItem('path', linkMenu.href)
        route()
    })


    container.append(
        conteudoCampeoes,
        linkMenu,
        navegadorPosterior
    )

    return container
}

const abrirMenu = () => {
    
}




// const cards = Object.entries(await campeaoApi)
// const testeA = Object.entries(cards[3][1])

// const gerarItems = testeA.map(teste)


// container.replaceChildren(...gerarItems)

