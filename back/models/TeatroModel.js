const mongoose = require('mongoose');

const TeatroSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    imagem: { type: String, required: true },
    lancamento: { type: Date, required: true },
    linhas: { type: Number, required: true },
    colunas: { type: Number, required: true }
});

const TeatroModel = mongoose.model('Teatro', TeatroSchema);

class Teatro {
    constructor(bodyReq) {
        this.body = bodyReq;
    }

    async buscar() {
        return await TeatroModel.find().sort({ lancamento: -1 });
    }

    async buscarTeatro(id) {
        return await TeatroModel.findById(id);
    }
};

module.exports = Teatro;