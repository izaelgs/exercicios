let str = '2subino onibus';

function stringReverse(str){
    arr_string = str.split('');
    let retorno = '';
    for(i = arr_string.length - 1; i >= 0; i--){
        retorno += arr_string[i];
    }

    return retorno;
}

console.log(stringReverse(str));