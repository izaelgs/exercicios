function isFibonacci(param){
    let fibonacci = [0,1];

    while(fibonacci[(fibonacci.length - 1)] <= param){
        fibonacci.push(fibonacci[(fibonacci.length - 1)] + fibonacci[(fibonacci.length - 2)]);
    }
        
    return fibonacci.includes(param, fibonacci) ? 'pertence a sequência' : 'não pertence a sequência';
}

console.log(isFibonacci(13));