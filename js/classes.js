'use strict'

import { linguas } from "./tradução/classes.js"

import './router.js'


const criarClassChampions = (card) => {

    const containerCards = document.createElement('div')
    containerCards.classList.add('container__cards')
    
    const ancoraClasses = document.createElement('a')
    ancoraClasses.href = '/champions/classe?=' + ((Object.keys(card)[0]).toString()).toLowerCase()

    const classChampion = document.createElement('class-champion')
    classChampion.nomeClasse = Object.values(card)

    const nomeClasses = Object.keys(card)[0]

    classChampion.imageClass = `https://universe.leagueoflegends.com/images/role_icon_${((nomeClasses).toString()).toLowerCase()}.png`

   
    ancoraClasses.addEventListener('click', () => {
        window.localStorage.setItem('classe', nomeClasses)
        window.localStorage.setItem('path', ancoraClasses.href)
        route()
    })

    ancoraClasses.append (
        classChampion
    )

    containerCards.append (
        ancoraClasses
    )

    return containerCards
}

export const carregarClasses = () => {
    const container = document.getElementById('classes')

    const cards = linguas["pt-BR"].classes

    const gerarItems = cards.map(criarClassChampions)

    container.replaceChildren(...gerarItems)
}

 