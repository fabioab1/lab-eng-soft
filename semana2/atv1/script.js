document.addEventListener("DOMContentLoaded", function() {
    let data = new Date();
    let dia = data.getDay();
    let diaMes = data.getDate();
    let mes = data.getMonth();
    let ano = data.getYear() + 1900;

    if (dia == 0)
        dia = "Domingo";
    else if (dia == 1)
        dia = "Segunda-feira";
    else if (dia == 2)
        dia = "Terça-feira";
    else if (dia == 3)
        dia = "Quarta-feira";
    else if (dia == 4)
        dia = "Quinta-feira";
    else if (dia == 5)
        dia = "Sexta-feira";
    else if (dia == 6)
        dia = "Sábado";

    if (mes == 0)
        mes = "janeiro";
    else if (mes == 1)
        mes = "fevereiro";
    else if (mes == 2)
        mes = "março";
    else if (mes == 3)
        mes = "abril";
    else if (mes == 4)
        mes = "maio";
    else if (mes == 5)
        mes = "junho";
    else if (mes == 6)
        mes = "julho";
    else if (mes == 7)
        mes = "agosto";
    else if (mes == 8)
        mes = "setembro";
    else if (mes == 9)
        mes = "outubro";
    else if (mes == 10)
        mes = "novembro";
    else if (mes == 11)
        mes = "dezembro";

    document.write("<p>"+dia+", "+diaMes+" de "+mes+" de "+ano+"</p>");
})