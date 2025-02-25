document.addEventListener("DOMContentLoaded", function () {
    let valores = [];

    let form = document.getElementById("formulario");
    let campo = document.getElementById("valor");

    let lista = document.createElement("ol");
    document.body.appendChild(lista);
    
    function adicionarElemento() {
        valores.push(campo.value);
        campo.value = "";
    }
    
    function atualizarLista() {
        valores.sort();
        
        lista.innerHTML = "";

        for (i=0; i<valores.length; i++)
        {
            let item = document.createElement("li");
            let t = document.createTextNode(valores[i]);
            item.appendChild(t);
            lista.appendChild(item);
        }
    }

    form.addEventListener("submit", function (e) {
        adicionarElemento();
        atualizarLista();
        e.preventDefault();
    });

});