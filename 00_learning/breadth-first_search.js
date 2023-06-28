const grafo = new Map();

grafo.set("voce", ["alice", "bob", "claire"]);
grafo.set("bob", ["anuj", "peggy"]);
grafo.set("alice", ["molly", "peggy"]);
grafo.set("claire", ["thom", "jonas"]);

function vendedor(nome) {
  let ultimo = nome[nome.length - 1];
  return ultimo == "m";
}

// Implementação de um "deque" em JavaScript
class Deque {
  constructor(items) {
    this.items = items;
  }

  // Inserção no final da fila
  enqueueRear(element) {
    this.items = [...this.items, ...element]
  }

  // Remoção do início da fila
  dequeueFront() {
    return this.items.shift();
  }

  toString() {
    return this.items.toString();
  }
}

var fila = new Deque(grafo.get("voce"));
var verificadas = new Deque([]);

var pessoa = null;
while (fila.items.length != 0) {
  pessoa = fila.dequeueFront();
  if (vendedor(pessoa)) {
    console.log(pessoa, "é vendedor de manga!");
    break;
  } else {
    verificadas.enqueueRear([pessoa]);
    if (grafo.has(pessoa)) {
      fila.enqueueRear(grafo.get(pessoa));
    } else {
      console.log(pessoa, "não possui conexões no grafo.");
    }
  }
}

var verified = verificadas.toString()

console.log("pessoas verificadas:", verified)
if (fila.items.length === 0) {
  console.log("Não há vendedores de manga na rede.");
}

