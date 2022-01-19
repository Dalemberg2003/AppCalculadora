const entrada = document.getElementById("operadores-numeros");

function borrar() {
  entrada.value = "";
}



function agregar(valor) {
  entrada.value += valor;
}

let operando1 = 0;
let simbolo = "";
function operador(ope) {
  operando1 = Number(entrada.value);
  simbolo = ope;
  entrada.value = "";
}

function raiz() {
  operando1 = Number(entrada.value);
  let resultado;
  resultado = Math.sqrt(operando1);
  entrada.value = resultado;
}

function calcular() {
  let operando2 = Number(entrada.value);
  let resultado;

  if (simbolo === "/") {
    resultado = operando1 / operando2;
  } else if (simbolo === "*") {
    resultado = operando1 * operando2;
  } else if (simbolo === "mod") {
    resultado = operando1 % operando2;
  } else if (simbolo === "-") {
    resultado = operando1 - operando2;
  } else if (simbolo === "+") {
    resultado = operando1 + operando2;
  }

  entrada.value = resultado;
}
