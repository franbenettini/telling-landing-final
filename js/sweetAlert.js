const { default: swal } = require("sweetalert");

function sweet(){
    Swal.fire({
        title: 'Recibimos tu mensaje',
        text: "Encontrá a tus escritores favoritos, apoyalos con una suscripción a su perfil y accedé a todo su contenido al instante.",
        showCancelButton:true,
        showConfirmButton:false,
        cancelButtonColor:'#1E8BE8',
        cancelButtonText:'Cerrar',
        className: 'swal-size',
        showClass: {
          popup: 'animate__animated animate__fadeInUpBig'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutDownBig'
        }
      })
};
