let livro = {}

livro.nome = prompt('Digite o nome do livro: ')
livro.autor = prompt('Digite o nome do autor do livro: ')
livro.publi = Number(prompt('Digite o ano de publicação: '))

let livro2 = {}

livro2.nome = prompt('Digite o nome do segundo livro: ')
livro2.autor = prompt('Digite o nome do autor do livro: ')
livro2.publi = Number(prompt('Digite o ano de publicação: '))

if (livro.publi < livro2.publi) {
    console.log(livro)
} else if (livro2.publi < livro.publi) {
    console.log(livro)
}

if (livro.nome == "estudando programação" || livro2.nome == "estudando programação") {
    console.log('Existe algum livro com o nome "estudando programação? SIM"')
} else {
    console.log('Existe algum livro com o nome "estudando programação? NÃO"')
}

if (livro.autor == livro2.autor) {
    console.log('São do mesmo autor? SIM')
    console.log(`Autor dos livros: ${livro.autor}`)
} else {
    console.log(`Autor do primeiro livro: ${livro.autor}`)
    console.log(`Autor do segundo livro: ${livro2.autor}`)
}