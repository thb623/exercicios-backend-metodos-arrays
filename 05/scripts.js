const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPacientes(arrayPacientes, nome){
    arrayPacientes.push(nome)
    return arrayPacientes.join(" - ", posicao)
    }

function atenderPacientes(arrayPacientes){
    arrayPacientes.shift()
    return arrayPacientes.join(" - ", posicao)
}

function cancelarAtendimento(arrayPacientes, nome){
    let posicao = arrayPacientes.indexOf(nome)
    if(posicao !== -1){
        arrayPacientes.splice(posicao, 1)
    }
    return arrayPacientes.join(" - ", posicao)
   
}

console.log(cancelarAtendimento(pacientes, 'Maria'))
