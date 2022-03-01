let CompleteName = document.getElementById("nombre");
let mail = document.getElementById("mail");
let text = document.getElementById("mensaje");
       
const formC = document.getElementById('formComplete');
const URL = 'https://script.google.com/macros/s/AKfycbwf3R5QIB1O2uNOXrn5CrJQF--1W3yVU0Xs_POgoTmKx3cXDkxIzxnG0d1XIHpimUJr8Q/exec'
formC.onsubmit = (e) => {
    let formData = new FormData();
    formData.append("CompleteName", CompleteName.value)
    formData.append("email", mail.value)
    formData.append("text", text.value)
    e.preventDefault();
    if(mail.value){
        fetch(URL, { method: 'POST', body: formData})
        .then(response => {
        console.log('Success!', response);
        mail.value = "";
        nombre.value = "";
        mensaje.value = "";
        sweet("Ya recibimos tu mensaje", "Intentaremos responder tu consulta cuanto antes, mientras tanto podés buscar más información sobre nosotros en Instagram y Facebook.");
    })
    .catch(error => console.error('Error!', error.message))
    }
}
