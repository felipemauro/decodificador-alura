var listaCriptografica = ["enter", "imes", "ai", "ober", "ufat"];
var listaNormal = ["e", "i", "a", "o", "u"];

const cifrasParaCriptografar = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const cifrasParaDescriptografar = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

function criptografaTexto(texto) {
    // Cria um objeto para armazenar as informações sobre maiúsculas e acentos
    let infoOriginal = [];
    
    // Armazena as informações originais de maiúsculas e acentos
    for (let i = 0; i < texto.length; i++) {
        infoOriginal.push({
            char: texto[i],
            isUpperCase: texto[i] === texto[i].toUpperCase(),
            hasAccent: texto[i].normalize("NFD") !== texto[i]
        });
    }

    // Normaliza o texto para remover acentos e transforma em minúsculas
    let textoConvertido = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    
    listaNormal.forEach(function (letra) {
        const regex = new RegExp(letra, "gi");  // Case insensitive
        textoConvertido = textoConvertido.replace(regex, cifrasParaCriptografar[letra]);
    });

    return { textoConvertido, infoOriginal };
}

function descriptografaTexto(criptoInfo) {
    let { textoConvertido, infoOriginal } = criptoInfo;
    let textoParaConverter = textoConvertido;

    listaCriptografica.forEach(function (letraCriptografada) {
        const regex = new RegExp(letraCriptografada, "gi");  // Case insensitive
        textoParaConverter = textoParaConverter.replace(regex, cifrasParaDescriptografar[letraCriptografada]);
    });

    // Restaura as letras maiúsculas e acentos usando as informações armazenadas
    let textoRestaurado = '';
    for (let i = 0; i < textoParaConverter.length; i++) {
        let char = textoParaConverter[i];
        let originalInfo = infoOriginal[i];

        if (originalInfo.isUpperCase) {
            char = char.toUpperCase();
        }

        if (originalInfo.hasAccent) {
            char = originalInfo.char;  // Restaura o caracter original com acento
        }

        textoRestaurado += char;
    }

    return textoRestaurado;
}


