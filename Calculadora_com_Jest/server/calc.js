function calcular(expressao) {
    try {
        // Substituir ^ por ** (potenciação)
        expressao = expressao.replace(/\^/g, "**");

        // Transformar percentual - porcentagem (ex: 20%200 => (20/100)*200)
        expressao = expressao.replace(/(\d+)%(\d+)/, '($1/100)*$2');
        expressao = expressao.replace(/\^/g, '**');


        let resultado = eval(expressao);

        if (!Number.isInteger(resultado)) {
            resultado = resultado.toFixed(2);
        }

        return resultado.toString();
    } catch (error) {
        throw new Error("Expressão inválida");
    }
}

module.exports = { calcular };