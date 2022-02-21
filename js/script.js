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

const openModalButtons = document.querySelectorAll('[data-modal-target]')

const closeModalButton = document.querySelectorAll('[data-close-button]')

const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButton.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
