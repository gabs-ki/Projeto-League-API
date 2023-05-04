export function page () {
    const container = document.createElement('div')
    container.classList.add ('vermelho-container')

    const titulo = document.createElement('h1')
    titulo.textContent = 'Champion'

    container.append(titulo)

    return container
}