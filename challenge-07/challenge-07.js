// -------------- Operador Módulo % ---------------------
// -------------- Lista Números Pares ---------------------

// var num = 0;
// while( num <= 20 ) {
//     num % 2  === 0 ? console.log(num) : '';
//     num++;
// }

// -------------- Arrays ---------------------
// -------------- Length ---------------------

// var arr = [ 'Mayara', 28, true, { gata: 'cinza' }, function() {} ];
// var qtd = arr.length;


// while( qtd > 0 ) {
//     console.log( arr[ --qtd ] );
//     if( qtd === 3 ) {
//         console.log( arr[ qtd ].gata );
//     }
// }

// //console.log (arr.length);

// -------------- Adicionar itens - Push ---------------------

// var arr = [ 'Mayara', 28, true, { gata: 'cinza' }, function() {} ];

// arr.push( { carro: 'vermelho' } );
// arr.push( [ 10, 20, 30 ] );
// arr.push( function soma( x, y ) { return x + y; });

// console.log ( arr.length );

// console.log ( arr );
// console.log ( arr[ 6 ][ 2 ] );
// console.log ( arr[ 3 ].gata );
// console.log ( arr[7]( 2, 3 ) );

// -------------- For ---------------------
// for (init; condition; final-expression)

// for( var x = 0; x <= 20 ; x++ ) {
//     console.log( x );
// }



/*
Desafio 07

Crie um array com 5 items (tipos variados).
*/
var arr = [ 'Mayara', 28, true, { gata: 'cinza' }, function() {}, { carro: 'vermelho' } ];
console.log ( arr );

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem( iten ) {
    arr.push( iten );
    return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem( [ 2, 'pet', true ] ) );


/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log( 'O segundo elemento do segundo array é ' + arr[ 6 ][ 1 ] + '.' );

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( 'O primeiro array tem ' + arr.length + ' itens. ' );

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
//console.log( arr[6].length );

console.log( 'O segundo array tem ' + arr[6].length + ' itens. ' );

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var num = 10
while( num <= 20 ) {
    num % 2 === 0 ? console.log( num ) : '' ;
    num++;
}


/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var num = 10
while( num < 20 ) { 
    num % 2 !== 0 ? console.log( num ) : '' ;
    num++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for( var num = 100;  num <= 120 ; num++ ) {
    num % 2 === 0 ? console.log( num ) : '' ;
}



console.log( 'Números ímpares entre 111 e 125:' );
for( var num = 111;  num <= 125 ; num++ ) {
    if( num % 2 !== 0 ) {
        console.log( num );
    }  
}