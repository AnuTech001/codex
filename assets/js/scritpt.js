function codificar(texto, deslocamento) {
  return texto
    .split("")
    .map((char) => {
      let codigo = char.charCodeAt(0);
      if (codigo >= 65 && codigo <= 90) {
        return String.fromCharCode(((codigo - 65 + deslocamento) % 26) + 65);
      } else if (codigo >= 97 && codigo <= 122) {
        return String.fromCharCode(((codigo - 97 + deslocamento) % 26) + 97);
      } else {
        return char;
      }
    })
    .join("");
}

function decodificar(texto, deslocamento) {
  return codificar(texto, 26 - deslocamento);
}

function mostrarResultado(acao) {
  let texto = document.getElementById("texto").value;
  let deslocamento = parseInt(document.getElementById("deslocamento").value);
  let resultado =
    acao === "codificar"
      ? codificar(texto, deslocamento)
      : decodificar(texto, deslocamento);
  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
