let display = document.querySelector(".display");
let operacaoAtual = "";
let resultadoAtual = "";

function adicionarNumero(numero) {
  if (resultadoAtual !== "") {
    operacaoAtual = resultadoAtual;
    resultadoAtual = "";
  }
  operacaoAtual += numero;
  atualizarDisplay();
}

function operacao(op) {
  if (op === "+/-") {
    if (operacaoAtual) {
      operacaoAtual = (parseFloat(operacaoAtual) * -1).toString();
      atualizarDisplay();
    }
    return;
  }
  if (resultadoAtual !== "") {
    operacaoAtual = resultadoAtual;
    resultadoAtual = "";
  }
  operacaoAtual += ` ${op} `;
  atualizarDisplay();
}

function calcular() {
  try {
    resultadoAtual = eval(operacaoAtual.replace(/÷/g, "/").replace(/×/g, "*"));
    operacaoAtual = resultadoAtual.toString();
  } catch {
    resultadoAtual = "Erro";
  }
  atualizarDisplay();
}

function limpar() {
  operacaoAtual = "";
  resultadoAtual = "";
  atualizarDisplay();
}

function backspace() {
  operacaoAtual = operacaoAtual.slice(0, -1);
  atualizarDisplay();
}

function atualizarDisplay() {
  display.value = operacaoAtual;
}

function capturarTecla(event) {
  event.preventDefault(); // Desativar a ação padrão do campo de entrada

  const key = event.key;
  if (!isNaN(key) || key === ".") {
    adicionarNumero(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    operacao(key);
  } else if (key === "Enter") {
    calcular();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape") {
    limpar();
  }
}
