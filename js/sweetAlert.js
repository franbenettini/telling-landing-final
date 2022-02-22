const { default: swal } = require("sweetalert2");

function sweet(title, text){
    Swal.fire({
        title: title,
        text: text,
        showCancelButton:true,
        showConfirmButton:false,
        cancelButtonColor:'#1E8BE8',
        position: 'bottom',
        customClass: {
          popup: 'swal-size',
          cancelButton: 'cancel-button',
          container: 'alert-container',
        },
        cancelButtonText:'Cerrar',
        showClass: {
          popup: 'animate__animated animate__fadeInUpBig'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutDownBig'
        }
      })
};
