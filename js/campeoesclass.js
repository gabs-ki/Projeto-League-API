'use strict'

import { pegarListaCardsApi } from "./leagueApi.js"

const listaCampeaoesApi = await pegarListaCardsApi()


const criarIconsChampions = (card) => {

     
  

    const linkCard = document.createElement('a')
    linkCard.href = '/champion?=' + card


    linkCard.addEventListener('click', () => {
        window.localStorage.setItem('path', linkCard.href)
        route()
        window.localStorage.setItem('campeao', card)
    })

    
    const icon__champion =  document.createElement('icons-champions')
    icon__champion.nomeIconChampion = card
    icon__champion.imageIconChampion = `http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${card}.png`
    icon__champion.imageFrameChampion = `../img/ab.png`

    linkCard.append(
        icon__champion
    )
      
    return linkCard
}

export const carregarCampeoesPorClasse = async (nome, dados, classe) => {
    const container = document.getElementById('container')

    let array = []

    const cards = Object.entries(await listaCampeaoesApi.data)

    cards.forEach((campeao) => {
        
        if(classe == campeao[1].tags[0]){

            array.push(campeao[0])

            const gerarItems = array.map(criarIconsChampions)

            container.replaceChildren(...gerarItems)
            

        }

    })  
    

}

