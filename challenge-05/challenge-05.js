/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ 'Mayara', 28, null, { x: 1 }, function() {} ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr) {
    return( arr );
};


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunction( myArray ) [1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myFunction2( arrayValores, index ) {
    return ( arrayValores [ index ]);
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray2 = [ 'Mayara', 28.8, null, { y: 2 }, function() {} ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log ( myFunction2( myArray2, 0 ) );
console.log ( myFunction2( myArray2, 1 ) );
console.log ( myFunction2( myArray2, 2 ) );
console.log ( myFunction2( myArray2, 3 ) );
console.log ( myFunction2( myArray2, 4 ) );

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( nameBook ) {

     var allBooks = { 
         'Propósito': {
             quantidadePaginas: 156,
             autor: 'Sri Prem Baba', 
             editora: 'Dummar' 
         },

         'Espreita a Escuridão': { 
             quantidadePaginas: 361, 
             autor: 'Alice Blanchard', 
             editora: 'Rocco' 
         },

         'Dark Eden': { 
             quantidadePaginas: 239, 
             autor: 'Patrick Carman', 
             editora: 'Gutenberg'
         }
     };

    return !nameBook ? allBooks : allBooks[ nameBook ];

};



/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookNamePaginas = 'Espreita a Escuridão';
console.log( 'O livro ' + bookNamePaginas + ' tem ' +  book( bookNamePaginas ).quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookNameAutor = 'Dark Eden';
console.log( 'O autor do livro ' + bookNameAutor + ' é ' + book( bookNameAutor ).autor + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookNameEditora = 'Propósito';
console.log( 'O livro ' + bookNameEditora + ' foi publicado pela editora ' + book( bookNameEditora ).editora + '.' );
