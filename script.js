const numero = prompt("tabuada")
let resultado = ""

for (let i = 0; i <= 10; i++) {
  resultado += `${numero} x ${i} = ${numero * i}\n`
}

alert(resultado)
