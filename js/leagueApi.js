'use strict'

export const pegarListaCardsApi = async () => {
    const url = `http://ddragon.leagueoflegends.com/cdn/13.9.1/data/pt_BR/champion.json`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

