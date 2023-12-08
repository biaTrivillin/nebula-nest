const menu = document.querySelector('#menu')
const sun = document.querySelector('#sun__icon')
const planets = document.querySelector('.planet__container')


menu.addEventListener('mouseover', () => {
    menu.style.opacity = 1
    menu.style.padding = '2rem'
    sun.style.display = "none"
    planets.style.display = 'flex'
})

menu.addEventListener('mouseleave', () => {
    menu.style.opacity = 0.7
    menu.style.padding = '1rem'
    sun.style.display = "block"
    planets.style.display = 'none'
})
