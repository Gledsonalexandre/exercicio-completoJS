//1)Escreva um programa que peça dois números e exiba a soma deles.

var num1 = parseFloat(prompt("Digite o primeiro número:"));
var num2 = parseFloat(prompt("Digite o segundo número:"));
console.log("A soma é : " + (num1 + num2));

//2)Escreva um programa que peça dois números e exiba a subtração do primeiro pelo segundo.

var num1 = parseFloat(prompt("Digite o primeiro número:"));
var num2 = parseFloat(prompt("Digite o segundo número:"));
console.log("A soma é : " + (num1 - num2));

//3)Escreva um programa que peça dois números e exiba a multiplicação deles.

var num1 = parseFloat(prompt("Digite o primeiro número:"));
var num2 = parseFloat(prompt("Digite o segundo número:"));
console.log("A soma é : " + (num1 * num2));

//4)Escreva um programa que peça dois números e exiba a divisão do primeiro pelo segundo.

var num1 = parseFloat(prompt("Digite o primeiro número:"));
var num2 = parseFloat(prompt("Digite o segundo número:"));
console.log("A soma é : " + (num1 / num2));

//5)Escreva um programa que peça dois números e exiba o resto da divisão do primeiro pelo segundo.

var num1 = parseFloat(prompt("Digite o primeiro número:"));
var num2 = parseFloat(prompt("Digite o segundo número:"));
if (num2 ! = 0) {
    console.log("O resto da divisão é : " + (num1 % num2))
} else {
    console.log("Erro Divisão por zero.");
}

//6)Escreva um programa que incremente o valor de uma variável em 1 e exiba o resultado.

var num1 = parseFloat(prompt("Digite  um número:"));
num ++;
console.log("O resultado é: " + num );

//7)Escreva um programa que decremente o valor de uma variável em 1 e exiba o resultado.

var num1 = parseFloat(prompt("Digite  um número:"));
num --;
console.log("O resultado é: " + num );

//8)Atribua o valor de uma variável a outra.

var num1 = parseFloat(prompt("Digite  um número:"));
var num2 = num1;
console.log("O valor de num2 é: " + num2 );

//9)Some 10 a uma variável existente usando o operador +=.

var num1 = parseFloat(prompt("Digite  um número:"));
num += 10;
console.log("O resultado é: " + num );

//10)Subtraia 5 de uma variável existente usando o operador -=.

var num1 = parseFloat(prompt("Digite  um número:"));
num -= 5;
console.log("O resultado é: " + num );

//11)Multiplique o valor de uma variável por 4 usando o operador *=.

var num1 = parseFloat(prompt("Digite  um número:"));
num *= 4;
console.log("O resultado é: " + num );

//12)Divida o valor de uma variável por 2 usando o operador /=.

var num1 = parseFloat(prompt("Digite  um número:"));
num /= 2;
console.log("O resultado é: " + num );

//13)Obtenha o resto da divisão de uma variável por 3 usando o operador %=.

var num1 = parseFloat(prompt("Digite  um número:"));
num %= 3;
console.log("O resultado é: " + num );

//14)Escreva um programa que verifique se um número é positivo ou negativo.

var num1 = parseFloat(prompt("Digite  um número:"));
if (num > 0) {
    console.log("O número é positivo.");
} else if (num < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero");
}

//15)Escreva um programa que verifique se um número é par ou ímpar.

var num1 = parseFloat(prompt("Digite um número:"));
if (num % 2 == 0) {
    console.log("O número é par.");
} else {
    console.log("O número é impar.")
}
//16)Escreva um programa que verifique qual dos dois números é maior.

var num1 = parseFloat(prompt("Digite o primeiro número:"));
var num2 = parseFloat(prompt("Digite o segundo número:"));
if (num1 > num2) {
    console.log("O primeiro número é maior.");
  } else if (num2 < num1) {
    console.log("O segundo número é maior.");
  } else {
    console.log("Os números são iguais .");

//17)Escreva um programa que verifique se uma pessoa tem mais de 18 anos.

var idade = parseFloat(prompt("Digite a idade"));
if (idade >= 18) {
    console.log("A pessoa é maior idade.");
  } else {
    console.log("A pessoa é menor idade.");
  } 
//18)Escreva um programa que verifique se um número está no intervalo entre 0 e 100.

var num = parseFloat(prompt("Digite um número:"));
if (num >= 0 && num <= 100) {
    console.log("O número está no intervalo.");
  } else {
    console.log("O número não está no intervalo.");
  } 
//19)Escreva um programa que verifique se uma letra é uma vogal ou consoante.

var letra = prompt("Digite uma letra: ").toLowerCase();
if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    console.log("A letra é vogal.");
} else if (letra >= "a" && letra <= "z") {
    console.log("A letra é consoante.");
} else {
    console.log("Não é uma letra.");
}
//20)Escreva um programa que verifique qual dos três números é o maior.


var num1 = parseFloat(prompt("Digite o primeiro número: "));
var num2 = parseFloat(prompt("Digite o segundo número: "));
var num3 = parseFloat(prompt("Digite o terceiro número: "));
if (num1 > num2 && num1 > num3) {
    console;log("O primeiro número é maior.");
} else if (num2 > num1 && num2 > num3) {
    console.log("O segundo número é maior.");
} else if (num3 > num1 && num3 > num2) {
    console.log("O terceiro número é maior.");
} else {
    console.log("Há números iguais.");
}
//21)Escreva um programa que verifique se um ano é bissexto.


var ano = parseInt(prompt("Digite um ano: "));
if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)) {
    console.log("O ano é bissexto.");
} else {
    console.log("O ano não é bissexto.");
}

//22)Escreva um programa que verifique se dois números são positivos.

var num1 = parseFloat(prompt("Digite o primeiro número: "));
var num2 = parseFloat(prompt("Digite o segundo número: "));
if (num1 > 0 && num2 > 0) {
    console.log("Ambos números são positivos.");
} else {
    console.log("Pelo menos um número não é positivo.");
}
//23)Escreva um programa que verifique se pelo menos um dos dois números é negativo.

var num1 = parseFloat(prompt("Digite o primeiro número: "));
var num2 = parseFloat(prompt("Digite o segundo número: "));
if (num1 < 0 || num2 < 0) {
    console.log("Pelo menos um número é negativo.");
} else {
    console.log("Ambos números são não negativos.");
}
//24)Escreva um programa que verifique se um número é par e positivo.

var num = parseFloat(prompt("Digite um número: "));
if (num > 0 && num % 2 == 0) {
    console.log("O número é par e positivo.");
} else {
    console.log("O número não é par e positivo.");
}
//25)Escreva um programa que verifique se um número não é múltiplo de 5.

var num = parseFloat(prompt("Digite um número: "));
if (num % 5 != 0) {
    console.log("O número não é múltiplo de 5.");
} else {
    console.log("O número é múltiplo de 5.");
}
//26)Escreva um programa que verifique se um número está fora do intervalo de 1 a 10.

var num = parseFloat(prompt("Digite um número: "));
if (num < 1 || num > 10) {
    console.log("O número está fora do intervalo.");
} else {
    console.log("O número está no intervalo.");
}
//27)Escreva um programa que verifique se dois números são pares.

var num1 = parseFloat(prompt("Digite o primeiro número: "));
var num2 = parseFloat(prompt("Digite o segundo número: "));
if (num1 % 2 == 0 && num2 % 2 == 0) {
    console.log("Ambos números são pares.");
} else {
    console.log("Pelo menos um número não é par.");
}
//28)Escreva um programa que verifique se a soma de dois números é maior que 100.

var num1 = parseFloat(prompt("Digite o primeiro número: "));
FontFaceSetLoadEvent num2 = parseFloat(prompt("Digite o segundo número: "));
if (num1 + num2 > 100) {
    console.log("A soma é maior que 100.");
} else {
    console.log("A soma não é maior que 100.");
}
//29)Escreva um programa que verifique se dois números são iguais ou diferentes.

var num1 = parseFloat(prompt("Digite o primeiro número: "));
var num2 = parseFloat(prompt("Digite o segundo número: "));

if (num1 == num2) {
console.log("Os números são iguais.");
} else {
console.log("Os números são diferentes.");
}
//30)Escreva um programa que verifique se uma string não está vazia.

var texto = prompt("Digite um texto: ");

if (texto != "" && texto != null && texto.trim() != "") {
console.logt("A string não está vazia.");
} else {
console;log("A string está vazia.");
}

        // exercicio 2
//Usando os operadores necessários e as condicionais “if, eles e eles if” Responda as questões de 1 até 10: 

//1)Verifique se um número é positivo ou negativo 

var num = parseFloat(prompt("Digite um número: "));

if (num > 0) {
console.log("O número é positivo.");
} else if (num < 0) {
console.log("O número é negativo.");
} else {
console.log("O número é zero.");
}
//2)Verifique se um número é par ou ímpar: 

var num = parseFloat(prompt("Digite um número: "));
if (num % 2 == 0) {
alert("O número é par.");
} else {
console.log("O número é ímpar.");
}
//3)Classifique uma nota de 0 a 10, da seguinte forma: se for igual ou maior que 9 a nota é “A”, se for 
//igual a 8 nota “B”, se for igual a 7  nota “C”, se for igual a 6 nota “D”, se for igual a 5 ou menor, nota “F”.

var nota = parseFloat(prompt("Digite uma nota de 0 a 10: "));
if (nota >= 9) {
console.log("Nota A");
} else if (nota == 8) {
console.log("Nota B");
} else if (nota == 7) {
console.log("Nota C");
} else if (nota == 6) {
console.log("Nota D");
} else {
console.log("Nota F");
}
//4) Verifique se um ano é bissexto:

var ano = parseInt(prompt("Digite um ano: "));
if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
console.log("O ano é bissexto.");
} else {
console.log("O ano não é bissexto.");
}
//5)Verifique se um número está entre 10 e 20: 

var num = parseFloat(prompt("Digite um número: "));
if (num >= 10 && num <= 20) {
console.logt("O número está entre 10 e 20.");
} else {
console.log("O número não está entre 10 e 20.");
}
//6)Determine o maior de dois números: 

var num1 = parseFloat(prompt("Digite o primeiro número: "));
var num2 = parseFloat(prompt("Digite o segundo número: "));
if (num1 > num2) {
console.log("O primeiro número é maior.");
} else if (num2 > num1) {
console.log("O segundo número é maior.");
} else {
console.log("Os números são iguais.");
}
//7)Verifique se um caractere é uma vogal ou consoante: 

var letra = prompt("Digite uma letra: ").toLowerCase();
if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
console.log("A letra é vogal.");
} else if (letra >= "a" && letra <= "z") {
console.log("A letra é consoante.");
} else {
console.log("Não é uma letra.");
}

//8)Verifique se um número é múltiplo de 3 ou 5: 

var num = parseFloat(prompt("Digite um número: "));
if (num % 3 == 0 || num % 5 == 0) {
console.log("O número é múltiplo de 3 ou 5.");
} else {
console.log("O número não é múltiplo de 3 ou 5.");
}
//9)Determine a fase do dia com base na hora (0-23): 

var hora = parseInt(prompt("Digite uma hora (0-23): "));
if (hora >= 6 && hora < 12) {
console.log("Manhã");
} else if (hora >= 12 && hora < 18) {
console,log("Tarde");
} else if (hora >= 18 && hora < 22) {
console.log("Noite");
} else {
console.log("Madrugada");
}
//10)Verifique se uma pessoa é maior de idade:

var idade = parseInt(prompt("Digite a idade: "));
if (idade >= 18) {
console.log("A pessoa é maior de idade.");
} else {
console,letra("A pessoa é menor de idade.");
}

//11) Use Switch case para verificar o dia da semana (0 - Domingo, 1 - Segunda, etc.):

var dia = parseInt(prompt("Digite o dia da semana (0-6): "));
switch (dia) {
case 0:
console.log("Domingo");
break;
case 1:
console.log("Segunda-feira");
break;
case 2:
console,log("Terça-feira");
break;
case 3:
console.log("Quarta-feira");
break;
case 4:
console.log("Quinta-feira");
break;
case 5:
console.log("Sexta-feira");
break;
case 6:
console.log("Sábado");
break;
default:
console.log("Dia inválido");
}

//12) Use Switch case para classificar uma fruta:

var fruta = prompt("Digite uma fruta: ").toLowerCase();
switch (fruta) {
case "maçã":
console.log("Fruta vermelnha");
break;
case "banana":
console.log("Fruta amarela");
break;
case "laranja":
console.log("Fruta cítrica");
break;
case "manga":
console.log("Fruta tropical");
break;
default:
console,log("Fruta desconhecida");
}
//13) Use Operador lógico AND (&&) para verificar se um número está entre 10 e 20:

var num = parseInt(prompt("Digite um número: "));
if (num >= 10 && num <= 20) {
console.log("O número está entre 10 e 20.");
} else {
console.log("O número não está entre 10 e 20.");
}

//14) Use o operador ternário para verificar se uma pessoa pode votar (maior de 18 anos):

var idade = parseInt(prompt("Digite a idade: "));
var podeVotar = idade >= 18 ? "Sim" : "Não";
console.log("Pode votar: " + podeVotar);

//15) Use Operador lógico OR (||) para verificar se uma pessoa é criança ou idosa:

var idade = parseInt(prompt("Digite a idade: "));
if (idade < 12 || idade > 65) {
console.log("A pessoa é criança ou idosa.");
} else {
console.log("A pessoa não é criança nem idosa.");
}
//16) Use Switch case para verificar a estação do ano com base no mês:

var mes = parseInt(prompt("Digite o mês (1-12): "));
switch (mes) {
case 1:
case 2:
case 12:
console.log("Inverno");
break;
case 3:
case 4:
case 5:
console.log("Primavera");
break;
case 6:
case 7:
case 8:
console,letra("Verão");
break;
case 9:
case 10:
case 11:
console.log("Outono");
break;
default:
console.log("Mês inválido");
}

//17) Use Operador ternário encadeado para classificar uma nota entre 0 e 10, da seguinte forma: se for igual ou maior 
//que 9 a nota é “A”, se for igual a 8 nota “B”, se for igual a 7  nota “C”, se for igual a 6 nota “D”, se for igual a 5 ou menor, nota “F”.

var nota = parseFloat(prompt("Digite uma nota de 0 a 10: "));
var classificacao = nota >= 9 ? "A" : nota == 8 ? "B" : nota == 7 ? "C" : nota == 6 ? "D" : "F";
console.log("Classificação: " + classificacao);