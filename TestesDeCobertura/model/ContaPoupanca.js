const { Conta } = require("./Conta.js")
const { Titular } = require('./Titular.js')

class ContaPoupanca extends Conta {
    static contasPoupanca = []

    constructor(saldo, senha, agencia, numero_conta, titular, taxaRendimento) {
        super(saldo, senha, agencia, numero_conta, titular)
        this.taxaRendimento = taxaRendimento 
        ContaPoupanca.contasPoupanca.push(this)
    }

    aplicarRendimento() {
        // rendimento de 0,5% ao mês
        let rendimento = this.saldo * this.taxaRendimento
        this.saldo += rendimento
        return { rendimento: `Rendimento aplicado: +${rendimento.toFixed(2)}, saldo atual: ${this.saldo.toFixed(2)}` }
    }

    static gerarContasPoupanca() {
        Titular.gerarTitulares()
        let titulares = Titular.titulares

        new ContaPoupanca(800, 1111, 201, 2001, titulares[0], 0.005)
        new ContaPoupanca(1200, 2222, 202, 2002, titulares[1], 0.004)
        new ContaPoupanca(600, 3333, 203, 2003, titulares[2], 0.005)
        new ContaPoupanca(950, 4444, 204, 2004, titulares[3], 0.005)
        new ContaPoupanca(2000, 5555, 205, 2005, titulares[4], 0.001)
        new ContaPoupanca(1350, 6666, 206, 2006, titulares[5], 0.001)
        new ContaPoupanca(400, 7777, 207, 2007, titulares[6], 0.010)
        new ContaPoupanca(1750, 8888, 208, 2008, titulares[7], 0.009)
        new ContaPoupanca(2200, 9999, 209, 2009, titulares[8], 0.004)
        new ContaPoupanca(500, 1010, 210, 2010, titulares[9], 0.005)
    }
}

module.exports = { ContaPoupanca }
