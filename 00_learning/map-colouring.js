const graph = {
    SP: ["MG", "RJ", "PR"],
    RJ: ["SP", "MG", "ES"],
    MG: ["SP", "RJ", "ES", "GO", "BA"],
    ES: ["MG", "RJ", "BA"],
    GO: ["MG", "MT", "MS", "BA", "TO"],
    MT: ["GO", "PA", "TO"],
    MS: ["GO", "MT", "PR", "SP"],
    PR: ["SP", "MS", "SC"],
    SC: ["PR", "RS"],
    RS: ["SC"],
    MA: ["PI", "TO", "PA"],
    PI: ["MA", "CE", "BA", "PE"],
    CE: ["PI", "RN", "PB", "PE"],
    RN: ["CE", "PB"],
    PB: ["RN", "CE", "PE"],
    PE: ["PI", "CE", "PB", "AL", "BA"],
    AL: ["PE", "BA", "SE"],
    SE: ["AL", "BA"],
    BA: ["SE", "AL", "PE", "PI", "TO", "MG", "ES"],
    TO: ["PA", "MA", "BA", "MG", "GO"],
    PA: ["TO", "MA", "AP", "MT"],
    AP: ["PA"],
    AC: ["AM", "RO"],
    AM: ["AC", "RR", "PA", "MT"],
    RR: ["AM"],
    RO: ["AC", "AM", "MT", "MS"],
    MT: ["RO", "AM", "PA", "TO", "GO", "MS"],
    PA: ["MT", "AM", "AP"],
    AP: ["PA"],
    RR: ["AM"],
    RO: ["AC", "AM", "MT", "MS"],
    MS: ["RO", "MT", "GO", "PR"],
    CE: ["PB", "RN", "PI", "PE"],
    PE: ["CE", "PB", "AL", "BA"],
    AL: ["PE", "SE", "BA"],
    BA: ["AL", "SE", "PE", "PI", "TO", "MG", "ES"],
};

function getRandomColor() {
   const letters = "0123456789ABCDEF";
   let color = "#";
   for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

let listOfColors = []
let estados = {}
const states = ["MG", "RJ", "PR"];

function coloring() {
    let coloridos = [];
    Object.keys(graph).forEach((state) => {
        let newColor = getRandomColor()
        estados[state] = newColor
        coloridos.push(state)
    });
    return {estados, coloridos};
}

const result = coloring(); 
console.log(result); 

