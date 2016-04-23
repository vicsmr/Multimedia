$(document).ready(inicializarEventos);

function inicializarEventos() {
    var x = $("#name");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#surnames");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#age");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#nacionality");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#position");
    x.blur(pierdeFoco);
    x = $("#email");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#postalcode");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
}

function tomaFoco() {
    var x = $(this);
    x.css("color", "#ff0000");
}

function pierdeFoco() {
    var x = $(this);
    x.css("color", "#17aa17");
}