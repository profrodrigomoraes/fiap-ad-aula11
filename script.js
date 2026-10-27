const foto = document.querySelector(".foto");
const mensagem = document.querySelector(".mensagem");

// Chave de API da NASA. DEMO_KEY serve para testar, mas tem limite baixo.
// Crie a sua chave grátis em https://api.nasa.gov e troque abaixo.

const API_KEY = "SUA-CHAVE-AQUI";

async function carregarFoto() {
  mensagem.textContent = "Carregando...";

  // a chave vai na URL, no parâmetro api_key
  const data = "261020"
  const url = "https://science.nasa.gov/wp-json/wp/v2/apod-basic/" + data + "?api_key=" + API_KEY;
console.log(url);

  try {
    const resposta = await fetch(url);

    if (resposta.status === 403) {
      mensagem.textContent = "Chave de API inválida.";
      return;
    }

    if (resposta.status === 429) {
      mensagem.textContent = "Limite de requisições atingido. Use a sua chave.";
      return;
    }

    // a NASA às vezes falha (status 500). Se não for 200, avisa e para.
    if (resposta.status !== 200) {
      mensagem.textContent = "A NASA não respondeu (status " + resposta.status + "). Tente de novo.";
      return;
    }

    const dados = await resposta.json();

    console.log(dados);

    foto.innerHTML = `
      <img src="${dados.hdurl}" alt="${dados.title}">
      <h2>${dados.title}</h2>
      <p>${dados.explanation}</p>
    `;
    mensagem.textContent = "";
  } catch (erro) {
    mensagem.textContent = "Não foi possível conectar à API.";
  }
}

carregarFoto();
