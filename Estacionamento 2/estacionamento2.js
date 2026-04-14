/**
 * Função responsável por exibir mensagens de erro/aviso ao usuário
 * @param {string} mensagem - O texto que será exibido no container vermelho
 */
function exibirAviso(mensagem) {
    const containerAviso = document.getElementById("container-aviso");
    const mensagemAviso = document.getElementById("mensagem-aviso");
    
    if (mensagem) {
        mensagemAviso.innerText = mensagem;
        containerAviso.removeAttribute("hidden");
    } else {
        containerAviso.setAttribute("hidden", "true");
    }
}

/**
 * Função principal que captura os dados e calcula a tarifa final
 */
function calcularTarifa() {
    const tarifaPrimeiraHora = 5.0;
    const tarifaHoraAdicional = 2.5;
    const tarifaDiaria = 60.0;

    const checkinValue = document.getElementById("checkin").value;
    const checkoutValue = document.getElementById("checkout").value;

    if (!checkinValue || !checkoutValue) {
        exibirAviso("Por favor, informe as datas de entrada e saída.");
        document.getElementById("resultado").innerText = "O valor total será exibido aqui.";
        return;
    }

    const checkinData = new Date(checkinValue);
    const checkoutData = new Date(checkoutValue);
    const tempoMs = checkoutData - checkinData;
    const horas = tempoMs / (1000 * 60 * 60);

    if (isNaN(horas) || horas < 0) {
        exibirAviso("Por favor, informe um intervalo de tempo válido.");
        document.getElementById("resultado").innerText = "O valor total será exibido aqui.";
        return;
    }

    exibirAviso("");

    let valorBase = 0;
    const diasCompletos = Math.floor(horas / 24);

    if (diasCompletos > 0) {
        const horasExcedentes = horas % 24;
        valorBase = (diasCompletos * tarifaDiaria) + (horasExcedentes * tarifaHoraAdicional);
    } else {
        if (horas <= 1) {
            valorBase = tarifaPrimeiraHora;
        } else {
            const horasAdicionais = horas - 1;
            valorBase = tarifaPrimeiraHora + (horasAdicionais * tarifaHoraAdicional);
        }
    }

    const valorFinal = valorBase;
    document.getElementById("resultado").innerText = "O valor total é R$ " + valorFinal.toFixed(2).replace('.', ',');
}
