const toggleMenu = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

const header = document.querySelector('header')

toggleMenu.addEventListener('click', () => {
    if (navigation.classList.contains('active')) {
        navigation.classList.remove('active')
    } else {
        navigation.classList.add('active')
    }
})


window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})