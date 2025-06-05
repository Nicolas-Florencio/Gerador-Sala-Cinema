const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    imagem: { type: String, required: true },
    lancamento: { type: Date, required: true },
    linhas: { type: Number, required: true },
    colunas: { type: Number, required: true }
});

const ShowModel = mongoose.model('Show', ShowSchema);

class Show {
    constructor(bodyReq) {
        this.body = bodyReq;
    }

    async buscar() {
        return await ShowModel.find().sort({ lancamento: -1 });
    }

    async buscarShow(id) {
        return await ShowModel.findById(id);
    }   
};

module.exports = Show;