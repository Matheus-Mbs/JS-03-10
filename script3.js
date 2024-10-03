let carro = {}
let option

carro.modelo = prompt('Digite o modelo do carro: ')
carro.marca = prompt('Digite a marca do carro: ')
carro.ano = Number(prompt('Digite o ano do carro: '))
carro.valor = Number(prompt('Digite o valor do carro: '))

option = confirm('Deseja continuar inserindo novos carros?')

while (option) {
    let carrotemp = {}

    carrotemp.modelo = prompt('Digite o modelo do carro: ')
    carrotemp.marca = prompt('Digite a marca do carro: ')
    carrotemp.ano = Number(prompt('Digite o ano do carro: '))
    carrotemp.valor = Number(prompt('Digite o valor do carro: '))

    if (carrotemp.valor > carro.ano) {
        carro = carrotemp
    }

    option = confirm('Deseja continuar inserindo novos carros?')
}

console.log(carro)