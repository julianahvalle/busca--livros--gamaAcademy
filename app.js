//redline sync -> simula entrada de pessoas usuárias 

const livros = require('./database')
console.log(livros)


//pegar inpout se quer escolher o livro por categoria

const readLine = require('readline-sync')

const entradaInicial = readLine.question('Deseja buscar um livro? S/N')

//se sim, mostrar as categorias disponíveis, pergunta qual categoria escolher

if (entradaInicial.toLocaleUpperCase() === 'S') {
//categorias disponíveis    
    console.log('Essas são as categorias disponíveis:')
    console.log('Sci-fi', '/Fantasia')

//selecção de categoria    
    const entredaCategoria = redline.question('Qual categoria você escolhe:')

//retorno da categoria 

const retorno = livros.filter(livro => livro.categoria === entredaCategoria)

//filtrar retorno exatamente igual a entrada 

console.table(retorno)
//retorna uma table 

}

//se não, mostrar todos os livros em ordem crescente de páginas 