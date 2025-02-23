document.addEventListener("DOMContentLoaded", function() {

    function atualizarHora() {

        let data = new Date();
        let relogio = document.getElementById("relogio");

        relogio.innerText = data.toString().substring(16, 24);

        setTimeout(atualizarHora, 1000);
        
    }

    atualizarHora();

})
