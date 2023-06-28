let estadosAbranger = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])

let estacoes = {}
estacoes["kum"] = new Set(["id", "nv", "ut"])
estacoes["kdois"] = new Set(["wa", "id", "mt"])
estacoes["ktres"] = new Set(["or", "nv", "ca"])
estacoes["kquatro"] = new Set(["nv", "ut"])
estacoes["kcinco"] = new Set(["ca", "az"])

let estacoesFinais = new Set()


while (estadosAbranger.size != 0) {
    let melhorEstacao = null
    let estadosCobertos = new Set()
    for (let [estacao, estados] of Object.entries(estacoes)){
        let cobertos = new Set()
        estadosAbranger.forEach(function(item) {
            if (estados.has(item)) {
                cobertos.add(item);
            }
        });
        console.log(cobertos)
        if (cobertos.size > estadosCobertos.size){
            melhorEstacao = estacao
            estadosCobertos = cobertos
        }
    }
    estadosAbranger = new Set(Array.from(estadosAbranger).filter(item => !estadosCobertos.has(item)));
    estacoesFinais.add(melhorEstacao)
}

console.log({estacoesFinais})