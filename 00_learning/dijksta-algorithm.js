const grafo = new Map()

grafo.set("i", new Map())
grafo.get("i").set("a", 6)
grafo.get("i").set("b", 2)

grafo.set("a", new Map())
grafo.get("a").set("f", 1)

grafo.set("b", new Map())
grafo.get("b").set("a", 3)
grafo.get("b").set("f", 5)

grafo.set("f", new Map())

const infinito = Infinity
const custos = new Map()
const custosValues = [
  ["a", 6],
  ["b", 2],
  ["f", infinito]
]
for (const [chave, valor] of custosValues) {
  custos.set(chave, valor);
}

const pais = new Map()
const paisValues = [
    ["a", "i"],
    ["b", "i"],
    ["f", null]
]
for (const [chave, valor] of paisValues) {
  pais.set(chave, valor);
}

var processados = []

function acheNoCustoMaisBaixo(custos) {
    var custoMaisBaixo = infinito;
    var nodoCustoMaisBaixo = null;
    for (nodo of custos) {
        let custo = nodo[1]
        if (custo < custoMaisBaixo && !processados.includes(nodo[0])){
            custoMaisBaixo = custo;
            nodoCustoMaisBaixo = nodo;
        }
    }
    return nodoCustoMaisBaixo
}

var nodo = acheNoCustoMaisBaixo(custos);

while (nodo != null) {
    let custo = nodo[1]
    var vizinhos = grafo.get(nodo[0])
    for (n of vizinhos) {
        var novoCusto = custo + n[1]
        if (custos.get(n[0]) > novoCusto) {
            custos.set(n[0], novoCusto)
            pais.set(n[0], nodo[0])
        }
    }
    processados.push(nodo[0])
    nodo = acheNoCustoMaisBaixo(custos)
}

console.log(pais, custos, processados)