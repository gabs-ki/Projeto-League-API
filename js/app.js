'use strict'

import './components/header.js'

import './components/footer.js'

import './components/campeao.js'

import './router.js'

import './components/classescampeao.js'

import './components/iconecampeao.js'



import { pegarListaCardsApi} from './leagueApi.js'


const cardsChampions = await pegarListaCardsApi()



const criarIconsChampions = (card) => {

    

    const linkCard = document.createElement('a')
    linkCard.href = '/champion?=' + card[1].name


    linkCard.addEventListener('click', () => {
        window.localStorage.setItem('path', linkCard.href)
        route()
        window.localStorage.setItem('campeao', card[1].id)
    })
    
    const icon__champion =  document.createElement('icons-champions')
    icon__champion.nomeIconChampion = card[1].name
    icon__champion.imageIconChampion = `http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${card[0]}.png`
   
    linkCard.append(
        icon__champion
    )
      
    return linkCard
}

const carregarItems = async () => {
    const container = document.getElementById('container')

    const cards = Object.entries(await cardsChampions.data)
  
    const gerarItems = cards.map(criarIconsChampions)

    container.replaceChildren(...gerarItems)

}



carregarItems()
