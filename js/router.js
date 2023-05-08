'use strict'

import { carregarCampeoes } from "./campeoes.js"
import { carregarClasses } from "./classes.js"
import { pegarCampeaoApi } from "./leagueApi.js"




const routes = {
    '/'      : {
        html: "/pages/home.html",
        js: ""
    } ,
    '/class' : {
        html: "/pages/class.html",
        js: carregarClasses
    } ,
    '/champion' : {
        html: "/pages/champion.html",
        js: carregarCampeoes
    } 
}

const route = async () => {
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

    routes[path].js(window.localStorage.getItem('campeao'), campeao)
}

window.onpopstate = handleLocation
window.route = route


