var numero = prompt("Digite um número inteiro e positivo: ");
while (isNaN(numero) || !Number.isInteger(parseInt(numero)) || numero<0)
    numero = prompt("Número inválido, digite um número inteiro e positivo: ");

var dividido = 0;
for (i=1; i<=numero; i++)
    if (numero % i == 0)
        dividido++;

if (dividido == 2)
    alert("O número "+numero+" é um número primo.");
else
    alert("O número "+numero+" não é um número primo.");
