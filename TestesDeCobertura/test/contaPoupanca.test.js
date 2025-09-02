const { ContaPoupanca } = require('../model/ContaPoupanca.js')

ContaPoupanca.gerarContasPoupanca()
let contasPoupanca = ContaPoupanca.contasPoupanca

test('Aplicar rendimento na conta poupança', () => {
    let conta = contasPoupanca[0]
    let saldoInicial = conta.saldo
    let taxa = conta.taxaRendimento

    let resp = conta.aplicarRendimento()

    let saldoEsperado = saldoInicial + (saldoInicial * taxa)
    expect(conta.saldo).toBeCloseTo(saldoEsperado, 2)
    expect(resp.rendimento).toContain("Rendimento aplicado")
})

test('Testar saque na conta poupança', () => {
    let conta = contasPoupanca[1]

    // saque com sucesso
    let resp1 = conta.saque(200, true)
    expect(resp1.saque).toBe(`Saque de 200 realizado com sucesso, seu saldo atual é ${conta.saldo}`)

    // sem saldo
    let resp3 = conta.saque(999999, true)
    expect(resp3.saque).toBe("Saque não realizado por falta de saldo")
})

test('Depositar na conta poupança', () => {
    let conta = contasPoupanca[2]

    let saldoInicial = conta.saldo
    let resp = conta.depositar(300, true)
    expect(resp.deposito).toBe(`Realizado deposito de 300 com sucesso, seu saldo atual é ${saldoInicial + 300}`)

    let resp2 = conta.depositar(100, false)
    expect(resp2.deposito).toBe("Acesso negado")
})

test.skip('Visualizar saldo na conta poupança', () => {
    let conta = contasPoupanca[3]

    let resp1 = conta.visualizarSaldo(true)
    expect(resp1.saldo).toBe(conta.saldo)

})
