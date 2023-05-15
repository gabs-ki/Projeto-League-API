'use strict'

import { carregarCampeoes } from "./campeoes.js"
import { carregarCampeoesPorClasse } from "./campeoesclass.js"
import { carregarClasses } from "./classes.js"
import { carregarItemsHome } from "./home.js"
import { pegarCampeaoApi } from "./leagueApi.js"




const routes = {
    '/'      : {
        html: "/pages/home.html",
        js: carregarItemsHome
    } ,
    '/classes' : {
        html: "/pages/classes.html",
        js: carregarClasses
    } ,
    '/champion' : {
        html: "/pages/champion.html",
        js: carregarCampeoes
    } ,
    '/champions/classe' : {
        html: "/pages/championclass.html",
        js: carregarCampeoesPorClasse
    }
}

const route = async () => {
    console.log(window.localStorage.getItem('path'))
    window.event.preventDefault()
    window.history.pushState({}, "", window.localStorage.getItem('path'))
    
    await handleLocation()
}

const handleLocation = async () => {
    const path = window.location.pathname
    const route = routes[path].html
    const response = await fetch(route)
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    const campeaoApi = await pegarCampeaoApi(window.localStorage.getItem('campeao'))
    const campeao = Object.entries(campeaoApi.data)

    routes[path].js(window.localStorage.getItem('campeao'), campeao, window.localStorage.getItem('classe'))
}

window.onpopstate = handleLocation
window.route = route


