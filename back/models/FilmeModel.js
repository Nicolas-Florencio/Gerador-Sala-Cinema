const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    imagem: { type: String, required: true },
    lancamento: { type: Date, required: true },
    linhas: { type: Number, required: true },
    colunas: { type: Number, required: true }
});

const FilmeModel = mongoose.model('Filme', FilmeSchema);

class Filme {
    constructor(bodyReq) {
        this.body = bodyReq;
    }

    async buscar() {
        return await FilmeModel.find().sort({ lancamento: -1 });
    }
};

module.exports = Filme;