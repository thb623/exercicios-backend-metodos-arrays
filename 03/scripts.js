function encontrarCarros(carros, posicao){
carroEncontrado = carros.splice(posicao, 3)
return carroEncontrado.join(" - ")
}
const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

console.log(encontrarCarros(nomes,posicao))