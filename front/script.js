const divFilmes = document.querySelector('.filmes');

window.addEventListener('load', () => {
    const filmes = buscarFilmes();

    filmes.forEach(filme => {
        const url = `/api/events/${filme._id}`;
        const cardFilme = cardGenerator(filme.imagem, filme.titulo, filme.descricao, url);
        divFilmes.appendChild(cardFilme);
    });
});

async function buscarFilmes() {
    try {
        const filmes = await axios.get('/api/filmes');
        return filmes.data;
    }
    catch(e) {
        console.log('Erro: ', e.message);
    }
}

function cardGenerator(imagem, titulo, descricao, urlComprar) { //função responsável pela criação de cards
    const card = document.createElement('div');
    const imagemCard = document.createElement('img');
    const tituloCard = document.createElement('h3');
    const descricaoCard = document.createElement('span');
    const linkComprar = document.createElement('a');

    imagemCard.src = imagem;
    tituloCard.innerText = titulo;
    descricaoCard.innerText = descricao;
    linkComprar.href = urlComprar;

    card.append(imagemCard, tituloCard, descricaoCard, linkComprar);

    return card;
}