$(document).ready(function(){

    // Mensaje al enviar formulario de contacto 
    $("#formulario").submit(function(e){
    e.preventDefault();

    alert("Mensaje enviado correctamente 🚗");

    // Limpiar campos del formulario de contacto
    $(this)[0].reset();
});

    // Scroll suave al hacer clic en menu
    $("a.nav-link").click(function(e){
        e.preventDefault();
        var target = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

});

// Formulario de testimonio
$("#form-testimonio").submit(function(e){
    e.preventDefault();

    let nombre = $("#nombre").val();
    let mensaje = $("#mensaje").val();

    let fecha = new Date().toLocaleDateString();

    let nuevoComentario = `
        <div class="comentario">
            <h5>${nombre}</h5>
            <small>Publicado el ${fecha}</small>
            <p>${mensaje}</p>
        </div>
    `;

    $("#lista-testimonios").prepend(nuevoComentario);

    // Limpiar campos
    $("#nombre").val('');
    $("#mensaje").val('');
});