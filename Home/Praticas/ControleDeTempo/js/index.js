
function ativarContagem() {
    document.getElementById("tempo").innerHTML = "Começou a contar";
    tempo = setTimeout(function(){
        document.getElementById("tempo").innerHTML = "Executou o setTimeout";
    }, 5000)
}

function pararContagem () {
    clearTimeout(tempo);
    document.getElementById("tempo").innerHTML = "Parou a Contagem";
}