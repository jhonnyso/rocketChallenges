const modalOverlay = document.querySelector('.modalOverlay')

const cards = document.querySelectorAll('.card')

for (const card of cards) {
   card.addEventListener('click', function() {
       modalOverlay.classList.add('active')
       
   }) 
}

const closeModal = document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
})

const maximizeModal = document.querySelector('.maximize-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('maximize')
})

modalOverlay.querySelector("iframe").src = "https://blog.rocketseat.com.br/es07-novas-features-no-javascript/"