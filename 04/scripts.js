const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function FilaAtendimento(operacao,nome){
   if(operacao === "agendar"){
    pacientes.push(nome)
   }else if(operacao === "atender"){
    pacientes.shift()
   }
   return pacientes.join(", ")
}

console.log(FilaAtendimento("atender"))