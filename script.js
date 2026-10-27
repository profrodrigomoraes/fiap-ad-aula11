const galeria = document.querySelector(".galeria");
const mensagem = document.querySelector(".mensagem");

// TODO — carregarGifs()
// - transformar em async e montar a URL:
//   API_URL + "/trending?api_key=" + API_KEY + "&limit=24"
// - fazer o fetch dentro de try/catch (erro de rede: "Não foi possível conectar à API.")
// - status 401 ou 403: mostrar "Chave de API inválida."
// - status 429: mostrar "Limite de requisições atingido. Tente mais tarde."
// - qualquer outro status diferente de 200: mostrar "A Giphy não respondeu. Tente de novo."
// - ler o JSON com await resposta.json()
// - para cada gif de dados.data, colocar na galeria:
//   <a href="detalhes.html?id=${gif.id}">
//     <img src="${gif.images.fixed_height.url}" alt="${gif.title}">
//   </a>
function carregarGifs() {

}

carregarGifs();
