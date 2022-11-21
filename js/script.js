$(document).ready(function(){

    $('#sendMessageButton').click(function(){
        var errores = '';

        // Validado Nombre ==============================
        if( $('#name').val() == '' ){
            errores += '<p>Escriba un Nombre</p>';
            $('#name').css("border-bottom-color", "#F14B4B");
        } else{
            $('#name').css("border-bottom-color", "#d1d1d1");
        }

        // Validado Email ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Ingrese un Email</p>';
            $('#email').css("border-bottom-color", "#F14B4B");
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1");
        }

        // Validado Mensaje ==============================
        if( $('#message').val() == '' ){
            errores += '<p>Escriba un Mensaje</p>';
            $('#message').css("border-bottom-color", "#F14B4B");
        } else{
            $('#message').css("border-bottom-color", "#d1d1d1");
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal-wrap">'+
                                    '<div class="mensaje-modal">'+
                                        '<h3>errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">cerrar</span>'+
                                    '</div>'+
                                '</div>'
            $('body').append(mensajeModal);
        }

    });

});

const label = document.getElementsByClassName('content');

for (i=0; i<label.length; i++) {
  content[i].addEventListener('click', function () {
    this.classList.toggle('activa')
  })
}

