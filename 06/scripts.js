const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function procurarDono(nomePet){
    let contador = 0
    for(let i = 0; i < usuarios.length;i++){
        pets = usuarios[i].pets
        nome = usuarios[i].nome
        pets = pets.indexOf(nomePet) 
        if(pets !== -1){
            console.log(`O dono(a) do(a) ${nomePet} é o(a) ${nome}`)
            contador++
            break
        }
    }
    if(contador === 0){
        console.log(`Que pena ${nomePet}, não encontramos seu dono(a)`) 
    }

}
procurarDono('Lulu')


