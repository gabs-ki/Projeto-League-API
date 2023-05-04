'use strict'

import './header.js'

import './footer.js'

import './router.js'

import './iconecampeao.js'

import { pegarListaCardsApi} from './leagueApi.js'

const cardsChampions = await pegarListaCardsApi()

const criarIconsChampions = (card) => {

    const linkCard = document.createElement('a')
    linkCard.setAttribute('href', '/vermelho')
    linkCard.setAttribute('onclick', 'route()')
    
    const icon__champion =  document.createElement('icons-champions')
    icon__champion.nomeIconChampion = card
    icon__champion.imageIconChampion = `http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${card}.png`
    
    linkCard.addEventListener('click', async () => {
        
       window.location.href = './pages/vermelho.html'
    })

    linkCard.append(
        icon__champion
    )

    return linkCard
}

const carregarItems = async () => {
    const container = document.getElementById('container')

    const cards = Object.keys(await cardsChampions.data)

    const gerarItems = cards.map(criarIconsChampions)

    container.replaceChildren(...gerarItems)
}

carregarItems()
