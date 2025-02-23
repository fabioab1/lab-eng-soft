document.addEventListener("DOMContentLoaded", function() {

    function inverterTexto(textoOriginal) {
        let textoAoContrario = "";
        for (let i=textoOriginal.length-1; i>=0; i--)
            textoAoContrario += textoOriginal.charAt(i); 
        return textoAoContrario;
    }

    document.getElementById("btn").addEventListener("click", function() {

        let input = document.getElementById("texto");
        let texto = input.value.replace(/\s/g, '');
        let textoAoContrario = inverterTexto(texto);

        console.log(texto);
        console.log(textoAoContrario);

        if (texto == textoAoContrario)
            alert("A frase/palavra é um palíndromo.");
        else
            alert("O frase/palavra não é um palíndromo.");

        input.value = '';

    })

})