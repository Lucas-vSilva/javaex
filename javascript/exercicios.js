let A = 0;
let B = 0;
var num = 0;
var aux = 0;
function ex1()
{ 
A = 10 
B = 20 
console.log("antes: A = " + A, "B = " + B); 
C = A 
A = B 
B = C 
console.log("depois: A = " + A, "B = " + B); 
}
function ex2()
{

    var num = 0;

    var aux = 0;



    num = prompt("Digite um numero: ");

        aux = num - 1;

        console.log('o antecessor  de ' + num + ", é " + aux);

   

}
function ex3()
{
var base      = 0;
var altura    = 0;
var resultado = 0;
    base = prompt("Digite um numero: ");
    altura = prompt("Digite outro numero: ");

        if(base == altura)
        {
            console.log ("NaN")
        }else
        {
            resultado = (base * altura);
            console.log (resultado);
        }
}
function ex4()
{
var idade = 0;
var meses = 0
var resultado = 0;
    var idade = prompt("Digite idade: ");
    if (idade == 0)
    {
        console.log("Nan")
    }
    else
    {
        resultado = (idade * 365) + (meses * 30);
        console.log (resultado);

    }

}
function ex5()
{
    var total     = 0;
    var brancos   = 0;
    var nulos     = 0;
    var validos   = 0;
    var x         = 100;
    var resultado = 0;
    var resultado1 = 0;
    var resultado2 = 0;
    var total   = prompt("Digite a quantidade de votos total: ");
    var brancos = prompt("Digite a quantidade de votos brancos: ");
    var nulos   = prompt("Digite a quantidade de votos nulos: ");
    var validos = prompt("Digite a quantidade de votos validos: ");

        if (total == 0)
        {
            console.log("NaN")
        }
        else
        {
            resultado  = (brancos / total) * x 
            resultado1 = (nulos / total)   * x 
            resultado2 = (validos / total) * x 

            console.log(resultado)
            console.log(resultado1)
            console.log(resultado2)

        }
}
console.log("O resultado do exercicio 1 é: ") + ex1();
console.log("O resultado do exercicio 2 é: ") + ex2();
console.log("O resultado do exercicio 3 é: ") + ex3();
console.log("O resultado do exercicio 4 é: ") + ex4();
console.log("O resultado do exercicio 5 é: ") + ex5();