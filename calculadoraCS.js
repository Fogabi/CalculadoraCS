let meses = document.querySelector('input#meses')
let alunos = document.querySelector('input#alunos')
let valorUnitario = document.querySelector('input#valorUnitario')
let resultado = document.querySelector('div#resultado')
let redacao = document.getElementsByName('redacao')
let numeroRedacoes = document.querySelector('input#numeroRedacoes')
let descontoMes = document.querySelector('input#descontoMes')
let descontoAlunos = document.querySelector('input#descontoAlunos')
let lista = document.querySelector('select#lista')
let valores = []
let parcelas = document.querySelector('input#parcelas')

function adicionarContrato(){

    const calculoDescontoMes = Number(descontoMes.value)/100 * Number(valorUnitario.value)
    const AplicacaoDescontoMes = Number(valorUnitario.value) - calculoDescontoMes
    const calculoDescontoAlunos = Number(descontoAlunos.value)/100 * AplicacaoDescontoMes
    const AplicacaoDescontoAlunos = AplicacaoDescontoMes - calculoDescontoAlunos
    const calculoTotal = AplicacaoDescontoAlunos * Number(alunos.value) * Number(meses.value)
    const calculoRedacao = 3.50 * Number(alunos.value) * Number(meses.value) * Number(numeroRedacoes.value)
    const calculoComRedacao = calculoRedacao + calculoTotal

    if (redacao[1].checked){ 
        let item = document.createElement('option')
        item.text = `${calculoTotal.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} adicionado`
        lista.appendChild(item)
        valores.push(calculoTotal)

    }else if (redacao[0].checked){
        let item = document.createElement('option')
        item.text = `${calculoComRedacao.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} adicionado`
        lista.appendChild(item)
        valores.push(calculoComRedacao)

    }
    meses.value = ''
    alunos.value = ''
    valorUnitario.value = ''
    numeroRedacoes.value = ''
    descontoAlunos.value = ''
    descontoMes.value = ''
    resultado.innerHTML = ''
}

function calcular(){
    let soma = 0
    for(let pos in valores){
        soma = soma + valores[pos]
    }
    let parcela = soma/Number(parcelas.value)
    resultado.innerHTML = `O valor total do contrato ?? de ${soma.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}<br>`
    resultado.innerHTML += `Parcelado em ${Number(parcelas.value)} vezes, o valor mensal ser?? de ${parcela.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} `
    lista.length = ''
    parcelas.value = ''
    valores.splice(0,valores.length)
}

