var dado = prompt("Digite: ");

if(confirm("Deseja verificar o tipo do dado?"))
    if (dado == "true" || dado == "false")
        document.write("boolean");
    else if(isNaN(dado))
        document.write(typeof(dado));
    else
        document.write(typeof(parseInt(dado)));
else
    document.write("Obrigado por visitar esta página");

    