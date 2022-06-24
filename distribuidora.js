class Faturamento {
    constructor(dias){        
        this.valorMinimo = this.getMinimo(dias);
        this.valorMaximo = this.getrMaximo(dias);
        this.media = this.getMedia(dias);       
    }     

    // getDados = function(dias) {
        
    //     let valorMinimo = this.getMinimo(dias);
    //     let valorMaximo = this.getrMaximo(dias);
    //     let media = this.getMedia(dias);

    //     return [dias,valorMinimo,valorMaximo,media];
        
    // }

    getMinimo(dias){
        let minimo;
    
        dias.forEach(dia => {
            if(typeof(minimo) == 'undefined' || dia.valor < minimo) minimo = dia.valor;
        })
        return minimo;
    }

    getrMaximo(dias){
        let maximo = 0;
    
        dias.forEach(dia => {
            if(dia.valor > maximo) maximo = dia.valor;
        })
        return maximo;
    }

    getMedia(dias){
        let total = 0;
    
        dias.forEach(dia => {
            total += dia.valor
        })
    
        return Number((total/dias.length).toFixed(2));
    }        
}


var faturamento = new Faturamento(require('./faturamento.json'));
console.log(faturamento);







// function rand(min = 0, max = 3){    
//     return Number((Math.random() * (max - min)+min).toFixed(2));
// }

// class Faturamento {
//     constructor(ano, mes){
//         this.ano = ano;
//         this.mes = mes;
//         this.dados = this.getDados(ano,mes);        
//     }     

//     getDados = function(ano, mes) {

//         let dia = 1;
//         var date = new Date(ano, mes, dia);
//         var ultimoDia = new Date(date.getFullYear(),
//                                 date.getMonth(), this.diasNoMes(date.getMonth()+1,
//                                 date.getFullYear()));
    
//         let dias = [];
//         while(date < ultimoDia){
//             dias.push({
//                 "data": new Date(ano, mes, dia),
//                 "valor": rand(500.00, 2000.00)
//             });
//             date = new Date(ano, mes, dia++);
//         }

//         let valorMinimo = this.getMinimo(dias);
//         let valorMaximo = this.getrMaximo(dias);
//         let media = this.getMedia(dias);

//         return [dias,valorMinimo,valorMaximo,media];
        
//     }

//     getMinimo(dias){
//         let minimo;
    
//         dias.forEach(dia => {
//             if(typeof(minimo) == 'undefined' || dia.valor < minimo) minimo = dia.valor;
//         })
//         return minimo;
//     }

//     getrMaximo(dias){
//         let maximo = 0;
    
//         dias.forEach(dia => {
//             if(dia.valor > maximo) maximo = dia.valor;
//         })
//         return maximo;
//     }

//     getMedia(dias){
//         let total = 0;
    
//         dias.forEach(dia => {
//             total += dia.valor
//         })
    
//         return Number((total/dias.length).toFixed(2));
//     }

//     diasNoMes = function (month, year) {
//         return new Date(year, month, 0).getDate();
//     }
    
// }


// const faturamento = new Faturamento(2022,6);
// console.log(faturamento.dados);