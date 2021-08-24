const modalOverlay = document.querySelector('.modalOverlay')

const cards = document.querySelectorAll('.card')

for (const card of cards) {
   card.addEventListener('click', function() {
    const blogID = card.getAttribute('id')  
    modalOverlay.classList.add('active')
       modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${blogID}`;
       
   }) 
}

const modal = document.querySelector('.modal')

document.querySelector(".maximize-modal").addEventListener("click", function(){
    if (modal.classList.contains('maximize') != true){
       modal.classList.add('maximize')
    } else {
        modal.classList.remove('maximize')
    }
})

const closeModal = document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
    modal.classList.remove('maximize')
})






