window.addEventListener('load', async () => {

    const [filmes, teatros, shows] = await Promise.all([
        buscarEventos('filmes'),
        buscarEventos('teatros'),
        buscarEventos('shows')
    ])

    if (filmes.length === 0) {
        createMessage('span', 'Não há filmes ;(', '.filmes');
    }

    if (teatros.length === 0) {
        createMessage('span', 'Não há teatros ;(', '.teatros');
    }

    if (shows.length === 0) {
        createMessage('span', 'Não há shows ;(', '.shows');
    }

    filmes.forEach(filme => {
        const url = `http://localhost:3000/api/filmes/detalhes/${filme._id}`;
        cardGenerator('.filmes', filme.imagem, filme.titulo, filme.descricao, url, 'filme');
    });

    teatros.forEach(teatro => {
        const url = `http://localhost:3000/api/teatros/detalhes/${teatro._id}`;
        cardGenerator('.teatros', teatro.imagem, teatro.titulo, teatro.descricao, url, 'teatro');
    });

    shows.forEach(show => {
        const url = `http://localhost:3000/api/shows/detalhes/${show._id}`;
        cardGenerator('.shows', show.imagem, show.titulo, show.descricao, url, 'show');
    });
});

async function buscarEventos(rota) {
    try {
        const resposta = await axios.get(`http://localhost:3000/api/${rota}`);
        return resposta.data;
    }
    catch(e) {
        console.error('Erro: ', e);
        return [];
    }
}

function cardGenerator(divPai, imagem, titulo, descricao, urlComprar, cardType) { //função responsável pela criação de cards
    const container = document.querySelector(divPai);
    const card = document.createElement('div');
    const imagemCard = document.createElement('img');
    const tituloCard = document.createElement('h3');
    const descricaoCard = document.createElement('span');
    const linkComprar = document.createElement('a');
    
    card.className = cardType;
    imagemCard.src = "./images/" + imagem;
    tituloCard.innerText = titulo;
    descricaoCard.innerText = descricao;
    linkComprar.href = urlComprar;
    linkComprar.innerText = "Comprar";

    card.append(imagemCard, tituloCard, descricaoCard, linkComprar);
    container.append(card);
}

function createMessage(tagType, conteudo, divPai) {
    const container = document.querySelector(divPai);
    const mensagem = document.createElement(tagType);
    mensagem.innerText = conteudo;
    container.append(mensagem);
}