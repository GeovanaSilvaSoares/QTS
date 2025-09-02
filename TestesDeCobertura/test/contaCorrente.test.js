const { Conta } = require('../model/Conta.js')
const { ContaCorrente } = require('../model/ContaCorrente.js')

beforeAll(() => {
  Conta.contas = []
  ContaCorrente.contasCC = []

  ContaCorrente.gerarContasCorrentes()
})

test('cobrarTaxa de 20 reais do saldo', () => {
  const cc = ContaCorrente.contasCC[0]
  const saldoAnterior = cc.saldo
  const resp = cc.cobrarTaxa()
  expect(cc.saldo).toBe(saldoAnterior - 20)
  expect(resp.taxa).toMatch(/Taxa/)
})

test('saque cobra taxa fixa (valor + 20)', () => {
  const cc = ContaCorrente.contasCC[1]
  const saldoAnterior = cc.saldo
  const resp = cc.saque(100, true)
  expect(resp.saque).toContain('Saque de 100 realizado com sucesso')
  expect(cc.saldo).toBe(saldoAnterior - 120)
})

test('saque falha se saldo < valor + taxa', () => {
  const cc = ContaCorrente.contasCC[2]
  const saldo = cc.saldo
  // tentar sacar tudo: vai faltar a taxa
  const resp = cc.saque(saldo, true)
  expect(resp.saque).toBe('Saque não realizado por falta de saldo')
  expect(cc.saldo).toBe(saldo)
})

test('transferir usa saque da CC (taxa aplicada na origem)', () => {
  const origem = ContaCorrente.contasCC[3]
  const destino = ContaCorrente.contasCC[4]
  const valor = 50

  const saldoOrigemAntes = origem.saldo
  const saldoDestinoAntes = destino.saldo

  const resp = origem.transferir(origem, destino, valor)

  expect(resp.transferencia).toBe('Realizada com sucesso')
  expect(origem.saldo).toBe(saldoOrigemAntes - (valor + 20))
  expect(destino.saldo).toBe(saldoDestinoAntes + valor)
})

test('autenticar encontra uma ContaCorrente gerada', () => {
  const cc = ContaCorrente.contasCC[0]
  const r = Conta.autenticar(cc.agencia, cc.numero_conta, cc.senha)
  expect(r.acesso).toBe(true)
  expect(r.conta).toBe(cc)
})
