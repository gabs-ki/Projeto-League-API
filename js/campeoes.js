import { pegarCampeaoApi} from "./leagueApi.js"

// const idCampeao = window.localStorage.getItem('campeao')

// const campeaoApi = await pegarCampeaoApi(idCampeao)


export const carregarCampeoes = async (nome, dados) => {

    console.log(dados[0][1])

    const container = document.getElementById('champion')

    const conteudoCampeoes = document.createElement('content-champion')
    conteudoCampeoes.imageCampeao = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nome}_0.jpg`
    conteudoCampeoes.nomeCampeao = ((dados[0][1].name).toString()).toUpperCase()
    conteudoCampeoes.subNomeCampeao = ((dados[0][1].title).toString()).toUpperCase()
    conteudoCampeoes.descricaoCampeao = dados[0][1].lore
    conteudoCampeoes.classeCampeao = dados[0][1].tags
    conteudoCampeoes.imageIconeCampeao = `http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${nome}.png`

    const classe = ((dados[0][1].tags[0]).toString()).toLowerCase()
   
    conteudoCampeoes.iconeClasseCampeao = `https://universe.leagueoflegends.com/images/role_icon_${classe}.png`
  

    container.append(
        conteudoCampeoes
    )

    return container
}



// const cards = Object.entries(await campeaoApi)
// const testeA = Object.entries(cards[3][1])

// const gerarItems = testeA.map(teste)


// container.replaceChildren(...gerarItems)

