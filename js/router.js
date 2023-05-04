'use strict'


const routes = {
    '/'         : "/pages/home.js",
    '/champion' : "/pages/champion.js",
    '/azul'     : "/pages/azul.js",
}

const route = () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.localStorage.getItem('path'))
    console.log(window.event.target.href)
    handleLocation()
}

const handleLocation = async () => {
    
    const path = window.location.pathname
   
    const route = routes[path]

    const {page} = await import (route)
   

    document.getElementById('root').replaceChildren( await page() ) 
}

window.onpopstate = handleLocation
window.route = route

