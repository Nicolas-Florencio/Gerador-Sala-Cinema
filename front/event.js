//gera a grade da sala (12 fileiras x 10 colunas)
function gerarSalaCinema(containerId) {
  const container = document.getElementById(containerId);
  const assentos = document.querySelector(".assentos");
  let cadeiras = 1;

  for (let i = 0; i < 12; i++) {
    const fileira = document.createElement("div");
    fileira.className = "fileira";

    for (let j = 0; j < 10; j++) {
      const cadeira = document.createElement("button");
      cadeira.className = "cadeira";
      cadeira.innerText = `${String.fromCharCode(65 + i)}${j + 1}`; //A1, A2, ..., L10

      //funcionalidade: desabilita ao clicar
      cadeira.addEventListener("click", () => {
        cadeira.disabled = true;
        assentos.innerText = cadeiras++;
      });

      fileira.appendChild(cadeira);
    }

    container.appendChild(fileira);
  }
}

//função que cria o card com os dados da API
function cardGenerator(
  divPai,
  imagem,
  titulo,
  descricao,
  urlComprar,
  cardType
) {
  const container = document.querySelector(divPai);
  const card = document.createElement("div");
  const imagemCard = document.createElement("img");
  const tituloCard = document.createElement("h3");
  const descricaoCard = document.createElement("span");
  const assentos = document.createElement("p");
  const linkComprar = document.createElement("a");

  card.className = cardType;
  imagemCard.src = "./images/" + imagem;
  tituloCard.innerText = titulo;
  assentos.className = "assentos";
  descricaoCard.innerText = "Assentos selecionados: ";
  linkComprar.href = urlComprar;
  linkComprar.id = "finalizar";
  linkComprar.innerText = "Finalizar";

  card.append(imagemCard, tituloCard, descricaoCard, assentos, linkComprar);
  container.append(card);
}

//busca dados do filme por ID e gera o card + sala
async function carregarFilme(id) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/filmes/detalhes/${id}`
    );
    if (!response.ok) throw new Error("Erro ao buscar o filme");

    const data = await response.json();

    //cria o card com os dados recebidos
    cardGenerator(
      "#card-container",
      data.imagem || "placeholder.jpg",
      data.titulo || "Sem Título",
      data.descricao || "Sem descrição",
      ``,
      "card-evento"
    );
    document.querySelector("#finalizar").addEventListener("click", (e) => {
      e.preventDefault();
      alert("Assentos reservados!");
	  window.location.replace("index.html");
    });
    //gera a sala de cinema
    gerarSalaCinema("sala-cinema");
  } catch (error) {
    console.error("Erro ao carregar o filme:", error);
  }
}

//busca dados do show por ID e gera o card + sala
async function carregarShow(id) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/shows/detalhes/${id}`
    );
    if (!response.ok) throw new Error("Erro ao buscar o show");

    const data = await response.json();

    //cria o card com os dados recebidos
    cardGenerator(
      "#card-container",
      data.imagem || "placeholder.jpg",
      data.titulo || "Sem Título",
      data.descricao || "Sem descrição",
      ``,
      "card-evento"
    );
    document.querySelector("#finalizar").addEventListener("click", (e) => {
      e.preventDefault();
      alert("Assentos reservados!");
	  window.location.replace("index.html");
    });
    //gera a sala de cinema
    gerarSalaCinema("sala-cinema");
  } catch (error) {
    console.error("Erro ao carregar o show:", error);
  }
}

//busca dados do teatro por ID e gera o card + sala
async function carregarTeatro(id) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/teatros/detalhes/${id}`
    );
    if (!response.ok) throw new Error("Erro ao buscar o teatro");

    const data = await response.json();

    //cria o card com os dados recebidos
    cardGenerator(
      "#card-container",
      data.imagem || "placeholder.jpg",
      data.titulo || "Sem Título",
      data.descricao || "Sem descrição",
      ``,
      "card-evento"
    );
	document.querySelector("#finalizar").addEventListener("click", (e) => {
      e.preventDefault();
      alert("Assentos reservados!");
	  window.location.replace("index.html");
    });
    //gera a sala de cinema
    gerarSalaCinema("sala-cinema");
  } catch (error) {
    console.error("Erro ao carregar o teatro:", error);
  }
}

//captura o ID da URL com URLSearchParams
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const type = params.get("type");

if (id) {
  if (type === "filme") {
    carregarFilme(id);
  }

  if (type === "show") {
    carregarShow(id);
  }

  if (type === "teatro") {
    carregarTeatro(id);
  }
} else {
  console.warn("Nenhum ID encontrado na URL");
}

document.querySelector("#voltar").addEventListener("click", () => {
  window.location.replace("index.html");
});
