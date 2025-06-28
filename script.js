document.getElementById("analisador-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const quantidade = parseInt(document.getElementById("quantidade").value);
  const resultadoDiv = document.getElementById("resultado");

  if (isNaN(quantidade) || quantidade <= 0) {
    mostrarErro("Por favor, insira uma quantidade válida maior que zero.");
    return;
  }

  const numeros = gerarNumerosAleatorios(quantidade);
  const analise = analisarNumeros(numeros);

  exibirResultado(numeros, analise);
});

function gerarNumerosAleatorios(quantidade) {
  const numeros = [];
  for (let i = 0; i < quantidade; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
  }
  return numeros;
}

function analisarNumeros(numeros) {
  const soma = numeros.reduce((acc, val) => acc + val, 0);
  const media = soma / numeros.length;
  const maior = Math.max(...numeros);
  const menor = Math.min(...numeros);
  const pares = numeros.filter(n => n % 2 === 0).length;
  const impares = numeros.length - pares;

  return { media, maior, menor, pares, impares };
}

function exibirResultado(numeros, { media, maior, menor, pares, impares }) {
  const resultado = `
    <p><strong>Números gerados:</strong> ${numeros.join(', ')}</p>
    <p><strong>Média:</strong> ${media.toFixed(2)}</p>
    <p><strong>Maior número:</strong> ${maior}</p>
    <p><strong>Menor número:</strong> ${menor}</p>
    <p><strong>Quantidade de pares:</strong> ${pares}</p>
    <p><strong>Quantidade de ímpares:</strong> ${impares}</p>
  `;
  document.getElementById("resultado").innerHTML = resultado;
}

function mostrarErro(mensagem) {
  document.getElementById("resultado").innerHTML = `<p style="color: red;">${mensagem}</p>`;
}
