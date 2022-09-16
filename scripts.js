const dataLancamento = new Date("Nov 01, 2022 00:00").getTime();

var tempo = setInterval(function() {
    const agora = new Date().getTime();
    const dataFinal = dataLancamento - agora;

    const dias = Math.floor(dataFinal / (1000 * 60 * 60 * 24));
    const horas = Math.floor((dataFinal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((dataFinal % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((dataFinal % (1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    if (dataFinal <= 0) {
        document.getElementById("tempo").innerHTML = "A hora chegou..."
    }
}, 1000);