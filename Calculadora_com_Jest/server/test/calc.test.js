const { calcular } = require('../calc.js');

// Casos de teste corretos
// 1- Teste de expressão com adição
test('calcular 2 + 9', () => {
    expect(calcular('2+9')).toBe("11");
});

// 2- Teste de expressão com subtração
test('calcular 5 - 7', () => {
    expect(calcular('5-7')).toBe("-2");
});

// 3- Teste de expressão com multplicação
test('calcular 3 * 4', () => {
    expect(calcular('3*4')).toBe("12");
});

// 4- Teste de expressão com divisão 
test('calcular 64 / 8', () => {
    expect(calcular('64/8')).toBe("8");
});

// 5- Teste de expressão com Potenciação
test('calcular 3 ^ 2', () => {
    expect(calcular('3^2')).toBe("9");
});

// 6- Teste de expressão com Potenciação 
test('calcular 50% de 60', () => {
    expect(calcular('50%60')).toBe("30"); //0,5*60=30
});

// 7- Teste de expressão faltando o segundo numero
test('ausência do 2º número 12 +', () => {
    expect(calcular('12+')).toThrow("Expressão inválida");
});

// 8- Teste de expressão com ausência do sinal e do segundo número
test('ausência do sinal e do segundo número 7', () => {
    expect(calcular('7')).toBe("7");
});

// 9- Teste de expressão com ausência dos dois números
test('ausência do sinal e do segundo número 7', () => {
    expect(calcular('*')).toThrow("Expressão inválida");
});

// 10- Teste de expressão com repetição de sinais, onde o segundo compõe o número inteiro
test('repetição de sinais, onde o segundo compõe o número inteiro 29 *- 9', () => {
    expect(calcular('29*-9')).toBe("-261");
});

// 11- Teste de expressão com repetição de sinais, onde o segundo não compõe o número inteiro
test('repetição de sinais, onde o segundo não compõe o número inteiro 29 -* 9', () => {
    expect(calcular('29-*9')).toThrow("Expressão inválida");
});

// 12- Teste de expressão iniciada com ','/ número decimal
test('inicio de conta com ponto 0,66 + 3', () => {
    expect(calcular('0.66+3')).toBe("3.66");
});

// 13- Teste de expressão de Potenciação com número negativo
test('calcular 2 ^ -2', () => {
    expect(calcular('2^-2')).toBe("0.25");
});

// 14- Teste de expressão de subtração com um número maior que o outro
test('calcular 5 - 10', () => {
    expect(calcular('5-10')).toBe("-5");
});

// 15- Teste de expressão com Repetição de sinais, onde ambos compõem um número inteiro
test('calcular 9 +- 15', () => {
    expect(calcular('9+-15')).toBe("-6");
});

// 16- Teste de expressão com Repetição de sinais, onde ambos compõem um número inteiro
test('calcular 88 -+ 6', () => {
    expect(calcular('88-+6')).toBe("82");
});

// 17- Teste de expressão com divisão por um número maior
test('calcular 72 / 333', () => {
    expect(calcular('72/333')).toBe("0.22");
});


// 18- Teste de expressão com duas operações
test('calcular 66 + 3 * 2', () => {
    expect(calcular('66+3*2')).toBe("72");
});


// 19- Teste de expressão com duas operações
test('calcular 6 / 3 * 2', () => {
    expect(calcular('6/3*2')).toBe("4");
});


// 20- Teste de expressão de potenciação com número grande 
test('calcular 79 ^ 666', () => {
    expect(calcular('79^666')).toBe("Infinity");
});