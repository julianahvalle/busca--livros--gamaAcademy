//array com objetos
const livros = [
 {   id: 1,
    nome: "Neuromancer",
    autor: "William Gibson",
    categoria: "Sci-fi",
    paginas: 320,
    recomenda: true, 
    leu: true
 },
 {   id: 2,
    nome: "Nome do Vento",
    autor: "Patrick Rothfuss",
    categoria: "Fantasia",
    paginas: 656,
    recomenda: true, 
    leu: true
 },
 {   id: 3,
    nome: "Duna",
    autor: "Frank Herbert",
    categoria: "Fantasia",
    paginas: 680,
    recomenda: false, 
    leu: true
 },
 {   id: 4,
    nome: "Game of Trhones",
    autor: "R.R.Martin",
    categoria: "Fantasia",
    paginas: 600,
    recomenda: true, 
    leu: true
 },
 {   id: 5,
    nome: "Monalisa Overdrive",
    autor: "William Gibson",
    categoria: "Fantasia",
    paginas: 320,
    recomenda: false, 
    leu: false
 }
]
//podemos exportar par usar em outro arquivo, desta forma:

module.exports = livros