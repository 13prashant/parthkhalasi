const toggleMenu = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggleMenu.addEventListener('click', () => {
    if (navigation.classList.contains('active')) {
        navigation.classList.remove('active')
    } else {
        navigation.classList.add('active')
    }
})