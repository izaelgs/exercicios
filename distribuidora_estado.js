const estados = [
    {
        "estado": "SP",
        "valor": 67836.43
    },
    {
        "estado": "RJ",
        "valor": 36678.66
    },
    {
        "estado": "MG",
        "valor": 29229.88
    },
    {
        "estado": "ES",
        "valor": 27165.48
    },
    {
        "estado": "Outros",
        "valor": 19849.53
    }
];

function PercentualMensalPorEstado(estados){
    let total = 0;
    let retorno = [];
    estados.forEach(estado => {
        total += estado.valor;        
        console.log(estado.valor);
    });    

    estados.forEach(estado => {
        retorno.push({
            "estado": estado.estado,
            "percentual": ((estado.valor/total) * 100).toFixed() + '%'
        });        
    });
    
    return retorno;
}

console.log(PercentualMensalPorEstado(estados));