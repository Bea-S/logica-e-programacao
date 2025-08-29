function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros(valor1, valor2) {
    //1. Somar todos os valores
    const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2);

    //2. Dividir pela quantidade de numeros passados 
    const resultadoDaMediaDeDoisValores = resultadoSomaDeDoisValores / 2;

    //3. Retornar o resultado
    return resultadoDaMediaDeDoisValores;

}

module.exports = {
    somarDoisNumeros
}