function divisaoArrays(arrayNome, numeroInt) {
  const nome = arrayNome;
  const quantidade = numeroInt;
  let novoGrupo = [];
  if (nome.length > quantidade) {
    novoGrupo = nome.slice(tamanhoDoGrupo, nome.length);
    nome.length = 4;
  }
  console.log(`Grupo1: ${nome.join(", ")}.`);

  console.log(`Grupo2: ${novoGrupo.join(", ")}.`);
}

const nomes = ["Juninho", "Vidal", "Guido", "Dani", "Ruli", "Diego"];

const tamanhoDoGrupo = 4;
divisaoArrays(nomes, tamanhoDoGrupo);
