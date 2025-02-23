var numero = prompt("Digite um número inteiro positivo");
while (isNaN(numero) || !Number.isInteger(parseInt(numero)) || numero<0)
    numero = prompt("Número inválido, digite um número inteiro positivo");

/*
console.log(isNaN(numero));
console.log(!Number.isInteger(parseInt(numero)));
console.log(numero<0);
*/

if (numero%2==0)
    alert("O número "+numero+" é par.");
else if (numero%2==1)
    alert("O número "+numero+" é ímpar.");
else
    alert("Nenhum número foi inserido.");