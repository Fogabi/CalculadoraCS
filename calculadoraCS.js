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

    let calculoSimples = Number(meses.value) * Number(alunos.value) * Number(valorUnitario.value)
    let calculoDescontoMes = (Number(descontoMes.value)/100) * calculoSimples
    let simplesMenosDesconto1 = calculoSimples - calculoDescontoMes
    let calculoDescontoAlunos =  (Number(descontoAlunos.value)/100) * simplesMenosDesconto1
    let desconto1MenosDesconto2 = simplesMenosDesconto1 - calculoDescontoAlunos
    let calculoRedacao = 3.50 * Number(alunos.value) * Number(meses.value) * Number(numeroRedacoes.value)
    let calculoComRedacao = calculoRedacao + desconto1MenosDesconto2

    
    if (redacao[1].checked){ 


        let item = document.createElement('option')
        item.text = `${desconto1MenosDesconto2.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} adicionado`
        lista.appendChild(item)
        valores.push(desconto1MenosDesconto2)

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
}

function calcular(){
    let soma = 0
    for(let pos in valores){
        soma = soma + valores[pos]
    }
    let parcela = soma/Number(parcelas.value)
    resultado.innerHTML = `O valor total do contrato é de ${soma.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}<br>`
    resultado.innerHTML += `Parcelado em ${Number(parcelas.value)} vezes, o valor mensal será de ${parcela.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} `
    lista.innerHTML = ''
    parcelas.value = ''
}

