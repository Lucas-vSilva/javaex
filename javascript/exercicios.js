//Exercicios Abaixo.
let opcao      = 0;
var resultado  = 0;
var A          = 10;
var B          = 20;
var C          = 0;
var num        = 0;
var aux        = 0;
var base       = 0;
var altura     = 0;
var idade      = 0;
var meses      = 0;
var dias       = 0;
var total      = 0;
var brancos    = 0;
var nulos      = 0;
var validos    = 0;
var resultado0 = 0;
var resultado1 = 0;
var resultado2 = 0;
var salario    = 0;
var percent    = 0;
var fabrica    = 0;
var nota1     = 0;
var nota2     = 0;
var nota3     = 0;
var maca      = 1.30;
var maca2     = 1;
var salario  = 0;
var vendas   = 0;
var comissao = 0.3;
var plr      = 0.5;


function menu()
{
    this.opcao = prompt
        ("---- Menu ----\n"  +
        "0. Sair"            +
        "1. Exercício 01\n"  +
        "2. Exercício 02\n"  +
        "3. Exercício 03\n"  +
        "4. Exercício 04\n"  +
        "5. Exercício 05\n"  +
        "6. Exercício 06\n"  +
        "7. Exercício 07\n"  +
        "8. Exercício 08\n"  +
        "9. Exercício 09\n"  +
        "10. Exercício 10\n" +
        "11. Exercício 11\n" +
        "12. Exercício 12\n" +
        "13. Exercício 13\n" +
        "14. Exercício 14\n" +
        "15. Exercício 15\n" +
        "16. Exercício 16\n" +
        "17. Exercício 17\n" +
        "18. Exercício 18\n" +
        "19. Exercício 19\n" +
        "20. Exercício 20\n" +
        "21. Exercício 21\n" +
        "22. Exercício 22\n" +
        "23. Exercício 23\n" +
        "24. Exercício 24\n" +
        "25. Exercício 25\n" +
        "Escolha uma das opções acima: ");
}
function operacao()
{
    menu();//chamando o menu
    switch(this.opcao)
    {
        case '0':
            console.log("Obrigado!")

            break;

        case '1':
            console.log(ex1());

            break;
        
        case '2':
            console.log(ex2());

            break;

        case '3':
            console.log(ex3());

            break;

        case '4':
            console.log(ex4());

            break;

        case '5':
            console.log(ex5());

            break;

        case '6':
            console.log(ex6());

            break;

        case '7':
            console.log(ex7());

            break;

        case '8':
            console.log(ex8());

            break;

        case '9':
            console.log(ex9());

            break;
        case '10':
            console.log(ex10());

            break;
        default:
            console.log("Escolha uma opção valida!")
            break;
    }//fim do switch


}//fim da função

function ex1()
{  
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
    base = prompt("Digite um número: ");
    altura = prompt("Digite outro número: ");

        if(base == altura)
        {
            console.log ("NaN");
        }else
        {
            resultado = (parseFloat(base) * (parseFloat(altura)));
            console.log ("A area do retângulo é: " + resultado);
        }
}

function ex4()
{
    var idade     = 0;
    var resultado = 0;
    var idade     = prompt("Digite sua idade em anos: ");
    if (idade == 0)
    {
        console.log("Nan");
    }
    else
    {
        resultado = (parseFloat(idade) * 365);
        console.log ("Esta é sua idade em dias: " + resultado);
    }
}

function ex5()
{
    var total      = 0;
    var brancos    = 0;
    var nulos      = 0;
    var validos    = 0;
    var resultado  = 0;
    var resultado1 = 0;
    var resultado2 = 0;
    var total      = prompt("Digite a quantidade de votos total: ");
    var brancos    = prompt("Digite a quantidade de votos brancos: ");
    var nulos      = prompt("Digite a quantidade de votos nulos: ");
    var validos    = prompt("Digite a quantidade de votos válidos: ");

        if (total == 0)
        {
            console.log("NaN")
        }
        else
        {
            resultado  = (parseFloat(brancos) /  (parseFloat(total) * 1.0));
            resultado1 = (parseFloat(nulos) /  (parseFloat(total) * 1.0));
            resultado2 = (parseFloat(validos) /  (parseFloat(total) * 1.0));

            console.log("A porcentagem de votos brancos é: " + resultado);
            console.log("A porcentagem de votos nulos é: " + resultado1);
            console.log("A porcentagem de votos válidos é: " + resultado2);

        }
}

function ex6()
{
    var salario   = 0;
    var percent   = 0;
    var resultado = 0;
    var salario   = prompt("Digite o salário atual: ");
    var salario   = prompt("Digite o reajuste: ");
    if (salario == 0)
    {
        console.log("NaN");
    }
    else 
    {
        resultado =  (parseFloat(salario) +  (parseFloat(salario) *  (parseFloat(percent) / 100)));
    }
    console.log("O reajuste do salário foi de: " + resultado);
}

function ex7()
{
    var fabrica   = 0;
    var resultado = 0;
    var fabrica   = prompt("Digite o valor do carro: ");
    if (fabrica == 0)
    {
        console.log("NaN");
    }
    else
    {
        resultado =  (parseFloat(fabrica) +  (parseFloat(fabrica) * 0.45 +  (parseFloat(fabrica) * 0.28)));
    }
    console.log("O custo final do carro foi de: " + resultado);
}

function ex8()
{
    var nota1     = 0;
    var nota2     = 0;
    var nota3     = 0;
    var resultado = 0;
    var nota1     = prompt("Digite a primeira nota do aluno: ");
    var nota2     = prompt("Digite a segunda nota do aluno: ");
    var nota3     = prompt("Digite a terceira nota do aluno: ");
    if (nota1 && nota2 && nota3 == 0)
    {
        console.log("NaN");
    }
    else
    {
        resultado = ((parseFloat(nota1)) + (parseFloat(nota2)) + (parseFloat(nota3))) /3;

    }
    console.log("A média deste aluno é de: " + resultado);
}
function ex9()
{
    var maca      = 1.30;
    var maca2     = 1;
    var resultado = 0;
    var pergunta  = parseInt(prompt("Digite a quantidade maçãs que deseja: "));
    if (maca > 11)
    {
        resultado =  (parseFloat(maca) * (parseFloat(pergunta)));
        console.log("A(s) maçã(s) custam: " + resultado * maca);
    }
    else (maca2 < 12)
    {
        resultado = (parseFloat(maca2) * (parseFloat(pergunta)));
        console.log("As maças custam: " + resultado * maca2 );


    }

}
function ex10()
{
    var salario  = 0;
    var vendas   = 0;
    var comissao = 0.3;
    var plr      = 0.5;
    var salario = parseInt(prompt("Digite seu salario: "));
    var vendas = parseInt(prompt("Digite a quantidade de vendas: "));
    if (vendas == 0)
    {
        resultado = salario;
    }
    else if (vendas < 1500)
    {
        resultado = salario + (salario / vendas * comissao);
    }
    else (vendas > 1500)
    {
        resultado = salario + (salario / vendas * plr);
    }

}
console.log("O resultado do exercicio 1 é: ") + ex1();
console.log("O resultado do exercicio 2 é: ") + ex2();
console.log("O resultado do exercicio 3 é: ") + ex3();
console.log("O resultado do exercicio 4 é: ") + ex4();
console.log("O resultado do exercicio 5 é: ") + ex5();
console.log("O resultado do exercicio 6 é: ") + ex6();
console.log("O resultado do exercicio 7 é: ") + ex7();
console.log("O resultado do exercicio 8 é: ") + ex8();
console.log("O resultado do exercicio 9 é: ") + ex9();
operacao();
