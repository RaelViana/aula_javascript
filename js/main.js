
function Clicou(){
    document.getElementById("Agradecimento").innerHTML = '<b>Obrigado Por Clicar</b>';
    //console.log( document.getElementById("Agradecimento"));
    //alert('Obrigado por Clicar');
}

function redirecionar(){
    window.open("https://beerorcoffee.com/coworking/space/global-labs--araraquara");
    //window.location.href ="https://beerorcoffee.com/coworking/space/global-labs--araraquara";
}

function trocar(elemento){
    //document.getElementById('mousemove').innerHTML = 'Obrigado por passa o mouse ';
    elemento.innerHTML = 'Obrigado por passa o mouse ';
}

function voltar(elemento){
    //document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui ';
    elemento.innerHTML = 'Passe o mouse aqui ';

    
}

function load(){
    alert('Página carregada');
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return  n1 + n2;
}

var validar; 
function validaIdade(idade){
   
   
   if(idade >= 18){
       validar = true;
   }else{
       validar = false;
   }
   return validar;
}

var idade =  prompt('Qual sua idade');
validaIdade(idade)
console.log(validar);

//alert(soma(5, 10));



var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getUTCFullYear());


var count;
for(count = 1; count <= 5; count ++){
   alert(count);
};


var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count = count + 1;
};


var idade = prompt('Qual sua Idade');


if (idade > 18){
    alert('maior de idade');
}else{
    alert('menor de idade')
}


var frutas = [{nome:'maçã',cor:'vermelha'},{nome:'uva',cor:'roxa'}]
console.log(frutas);
alert(frutas[1].nome);

var lista = ['maçã','pêra','laranja'];
//lista.push('uva');
//lista.pop('pêra');
//lista.reverse();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(' - '));
//alert(lista[1]);


var nome = ' Rael Viana';
var idade = 32;
var idade2 = 10;
var frase = 'Japão é o melhor time do mundo'
alert(nome + ' tem ' + idade + ' anos ');
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão","Brasil"));
alert(frase.replace("Japão","Brasil"));
console.log(frase.toLocaleUpperCase());*/