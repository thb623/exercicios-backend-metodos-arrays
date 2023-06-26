const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

const reverse = frutas.reverse()
console.log(`${reverse.join(", ")}`)

frutas.pop()
frutas.shift()
frutas.reverse()
frutas.push('Melão')
console.log(frutas)
