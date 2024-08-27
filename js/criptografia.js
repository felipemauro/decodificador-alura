function criptografa() {
    var campoTexto = document.getElementById("texto-principal");
    var btnCryptography = document.querySelector("#criptografar");

    btnCryptography.addEventListener("click", function (event) {
        event.preventDefault();
        const { textoConvertido, infoOriginal } = criptografaTexto(campoTexto.value);

        var campoVazio = document.querySelector(".sem-retorno");
        campoVazio.classList.add("d-none");

        var campoPreenchido = document.querySelector(".texto-criptografado");
        campoPreenchido.classList.remove("d-none");

        var paragrafo = document.querySelector(".texto-criptografado p");

        paragrafo.textContent = textoConvertido;

        // Armazena as informações criptografadas para o processo de descriptografia
        campoTexto.setAttribute("data-info-original", JSON.stringify(infoOriginal));
    });
}

criptografa();

function descriptografa() {
    var campoTexto = document.getElementById("texto-principal");
    var btnCryptography = document.querySelector("#descriptografar");

    btnCryptography.addEventListener("click", function (event) {
        event.preventDefault();
        // Recupera as informações originais armazenadas
        const infoOriginal = JSON.parse(campoTexto.getAttribute("data-info-original"));
        const textoCriptografado = campoTexto.value;
        const textoDescriptografado = descriptografaTexto({ textoConvertido: textoCriptografado, infoOriginal });

        var campoVazio = document.querySelector(".sem-retorno");
        campoVazio.classList.add("d-none");

        var campoPreenchido = document.querySelector(".texto-criptografado");
        campoPreenchido.classList.remove("d-none");

        var paragrafo = document.querySelector(".texto-criptografado p");

        paragrafo.textContent = textoDescriptografado;
    });
}

descriptografa();
