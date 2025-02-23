var numero = prompt("Digite um número inteiro positivo: ");
while (isNaN(numero) || !Number.isInteger(parseInt(numero)) || numero<0)
    numero = prompt("Número inválido, digite um número inteiro positivo: ");

var fatorial = numero;

if (numero != 0)
    for(i=numero-1; i>0; i--)
        fatorial = i*fatorial;
else
    fatorial = 1;

alert("O fatorial de "+numero+" é "+fatorial);