$(document).ready(function(){
    $('#menuSobre').click(function(){
        $('#sobreNosotros').animatescroll({padding:-345})
    });

    $('#menuFunciones').click(function(){
        $('#funcionalidades').animatescroll({padding:75})
    });

    $('#menuEquipo').click(function(){
        $('#equipo').animatescroll({padding:7})
    });

    $('#menuContacto').click(function(){
        $('#contacto').animatescroll({padding:5})
    });

    //Para que el menu desplegable se oculte automáticamente luego de hacer click (en móviles)
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});