$(document).ready(inicializarEventos);

function inicializarEventos() {
    x = $("#fullname");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#stadium");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#description");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#history");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#coach");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#delegate");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#secdelegate");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#physioterapist");
    x.focus(tomaFoco);
    x.blur(pierdeFoco);
    x = $("#goalkeepercoach");
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