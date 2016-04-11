$(document).ready(inicializarEventos);

function inicializarEventos() {
    var x = $("#name");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#fullname");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#stadium");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#capacity");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#location");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#foundation");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#nacionality");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#nickname");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#partners");
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