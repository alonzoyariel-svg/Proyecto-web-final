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
$("#form-testimonio").on("submit", function(e) {
    e.preventDefault();

    const nombre = $("#nombre").val();
    const mensaje = $("#mensaje").val();
    const fecha = new Date().toLocaleDateString();

    const $comentario = $("<div>").addClass("comentario");
    $comentario.append($("<h5>").text(nombre));
    $comentario.append($("<small>").text(`Publicado el ${fecha}`));
    $comentario.append($("<p>").text(mensaje));

    $("#lista-testimonios").prepend($comentario);

    this.reset();
});