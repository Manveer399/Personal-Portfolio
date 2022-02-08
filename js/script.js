const header = document.querySelector('header')
const homeSection = document.querySelector('.home-section')

const options = {
  rootMargin: '-700px 0px 0px 0px',
}

const homeSectionObserver = new IntersectionObserver(
  (entries, homeSectionObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('header-background')
      } else {
        header.classList.remove('header-background')
      }
    })
  },
  options
)

homeSectionObserver.observe(homeSection)

const menuButton = document.querySelector('#menu-bar')
const menu = document.querySelector('.menu')
const closeButton = document.querySelector('#close-btn')

menuButton.addEventListener('click', () => {
  menu.classList.toggle('active')
  closeButton.classList.toggle('active')
})

closeButton.addEventListener('click', () => {
  menu.classList.toggle('active')
  closeButton.classList.toggle('active')
})
