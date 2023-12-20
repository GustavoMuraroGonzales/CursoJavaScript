//Comando base para pegar a data 
let data = new Date();
//console.log(data);

//Comando para pegar o Ano com Digitos 
let ano = data.getFullYear();
//console.log(ano);

//Comando para pegar o mês atual - De 0 a 11 sendo 0 janeiro e 11 dezembro
let mes = data.getMonth();
//console.log(mes);//

//Comando para mostrar o mês no formato escrito 
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                             "Julho", "Agosto", "Setembro", "Outubro", 
                                "Novembro", "Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
//console.log(mesEscrito);

//Comando para mostrar o dia do mês
let diaMes = data.getDate();
//console.log(diaMes);

//Comando para pegar o dia da semana - 0 a 6 sendo 0 domingo e 6 sabado
let diaSemana = data.getDay();
//console.log(diaSemana);

//Comando para mostrar o dia dda Semana no formato escrito
const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
let diaEscrito = diasDaSemana[data.getDay()];
//console.log(diaEscrito);]

//Comando para pegar a Hora - De 0 até 23
let hora = data.getHours();
//console.log(hora);

//Comando para pegar os minutos - De 0 até 59
let min = data.getMinutes();
//console.log(min);

//Comando para pegar os segundos - De 0 até 59
let seg = data.getSeconds();
//console.log(seg);

//Comando para pegar os milisegundos - De 0 até 999
let miliseg = data.getMilliseconds();
//console.log(miliseg);

//Comando para pegar a data no padrão Brasileiro (Dia/Mes/Ano)
let dataBR = data.toLocaleString("pt-br");


//Comando para pegar somente a data e não a hora
let dataBRonly = data.toLocaleString("pt-br", { dateStyle: `short`});
document.getElementById("dataAtual").innerHTML = dataBRonly;

//Comando para pegar somente a hr no padrão PT-BR
let timeBRonly = data.toLocaleString("pt-br", { timeStyle: `short`});
document.getElementById("timeAtual").innerHTML = timeBRonly;

//Comando para fazer a data no padrão PT-BR usando concatenação
d = new Date();
diaMes = d.getDate();
mes = d.getMonth();
ano = d.getFullYear();

function addZero(x) { return x < 10 ? "0" + x : '' + x; };

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
//console.log(dataPadraoBR);

//Comparar Data - Maior ou Menor (Ex:Vencimentos)
var hoje = new Date();
var vencimento = new Date(2023,11,15);

if (hoje > vencimento) {
    //console.log("Sua conta está vencida");
} else {
    //console.log("Ainda não venceu, tudo certo!");
}

//Diferença entre duas Datas (Em Dias)
var dataInicial = new Date();
var diaDoNatal = new Date(2023,11,25);

var diferencaTempo = diaDoNatal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
document.getElementById("tempoParaONatal").innerHTML = "Faltam " + diferencaDias + " Dias para o Natal" ;