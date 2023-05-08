import { linguas } from "./tradução/classes.js"


const criarClassChampions = (card) => {
    const classChampion = document.createElement('class-champion')

    return classChampion
}

export const carregarClasses = () => {
    const container = document.getElementById('teste')

    const cards = linguas["pt-BR"].classes

    const gerarItems = cards.map(criarClassChampions)

    container.replaceChildren(...gerarItems)
}

