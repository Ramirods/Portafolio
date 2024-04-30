//Defino el id de las cards a crear en 0
let cardId = 0

//Alert del boton de notificaciones
function notificationClick() {
    alert('No hay nuevas notificaciones.')
}

//Logica para el boton "🔔"
const notificationButton = document.getElementById('notification');
notificationButton.addEventListener('click', notificationClick);

//Alert del boton de soporte
function supportClick() {
    alert('Si necesita ayuda o desea hacer un reclamo, comuniquese con nosotros (soporte.mytrello@gmail.com) ')
}

//Logica para el boton "❓"
const supportButton = document.getElementById('support');
supportButton.addEventListener('click', supportClick);

//Logica para el retorno de la barra de busqueda
function searchInput(e){
    if (e.key === 'Enter'){
        alert('No hay resultados para su busqueda :(')
    }
}

//Logica para limpiar la barra de busqueda
const search = document.getElementById('searchimp')
search.addEventListener('keypress', searchInput);


function hola(e){
    var editModal = document.getElementById("editModal");
    var idCard = `Card${e.target.id}`
    var editCardInfo = document.getElementById(idCard)
    console.log(`Card${e.target.id}`)
    console.log(e.target.id)
    console.log(editCardInfo)
    editModal.style.display = "block";
}

//Logica para crear las cards
function createCard(){
    let cardContent = document.createElement("div")
    let title = document.getElementById('title').value
    console.log(title)
    let subTitle = document.getElementById('subTitle').value
    console.log(subTitle)
    let content = document.getElementById('content').value
    console.log(content)
    cardContent.innerHTML = `
    <div id="Card${cardId}" class="card">
      <div class="titleplusbutton">
        <h2 id="h21">${title}</h2>
        <button onclick='hola(event)' id="${cardId}" class="cardbutton">✎</button>
      </div>
      <div class="cardcontent">
        <h3 class="subTitle">${subTitle}</h3>
        <p class="content">${content}</p>
      </div>
    </div>`
    const container = document.getElementById("container")
    container.appendChild(cardContent)
    document.getElementById("modalForm").reset()
    cardId+=1
}

//Logica para enviar lo escrito en el modal a las cards
const newCardHandler = document.getElementById('sumbit')
newCardHandler.addEventListener('click',createCard)

//Almaceno el modal en una variable
var modal = document.getElementById("myModal");

//Almaceno el boton en una variable
var sumbitbtn = document.getElementById('sumbit')

//Abre el modal
function openModal() {
  modal.style.display = "block";
}

//Llama a la funcion de abrir el modal a la hora de interactuar con el boton
const newCard = document.getElementById('newcardbutton')
newCard.addEventListener('click', openModal)

//Cierra el modal a la hora de interactuar con el boton
sumbitbtn.onclick = function() {
  modal.style.display = "none";
}

//Cierra el modal si se intaractua con el entorno de la ventana
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    }
}

//Traigo el modal de editar
var editModal = document.getElementById("editModal");

//Traigo el boton que confirma la edicion
var editBtn = document.getElementById('edit')

//El modal se oculta cuando toco el boton
editBtn.onclick = function() {
    editModal.style.display = "none";
}

//Cierra el modal si se intaractua con el entorno de la ventana
window.onclick = function(event) {
    if (event.target == editModal) {
      editModal.style.display = "none";
    }
}