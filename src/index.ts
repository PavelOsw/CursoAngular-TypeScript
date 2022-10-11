/*
    ===== Código de TypeScript =====
*/

// <T> significa generico, puede ser de cualquier tipo

function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy( 100 );
let soyArreglo = queTipoSoy( [1,2,3,4,5] );

let soyExplicito = queTipoSoy<number>( 7 );

