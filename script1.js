pessoa = {}

pessoa.nome = prompt('Digite o nome da pessoa: ')
pessoa.idade = prompt('Digite a idade da pessoa: ')
pessoa.cidade = prompt('Digite a cidade da pessoa: ')


let i = 0

do{
    let edit = Number(prompt('1- Idade\n2- Cidade\n99- Sair\nSelecione o que deseja mudar na pessoa: '))

    switch(edit){
        case 1:
            pessoa.idade = prompt('Digite a nova idade: ')
            break
        case 2:
            pessoa.cidade = prompt('Digite a nova cidade: ')
            break
        default:
            i = 1
            break
    }
}while(i == 0)

console.log(pessoa)