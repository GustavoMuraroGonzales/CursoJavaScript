

function ativarContagem() {

    setInterval(function () {
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma= parseInt(cronometro) + 1;
        document.getElementById("tempo").innerHTML = soma
    }, 1000);

}

function pararContagem () {

}