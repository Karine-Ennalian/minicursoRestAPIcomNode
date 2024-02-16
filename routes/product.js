const express = require('express');
const router = express.Router();

// RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Listanto todos os produtos'
    });
});

// INSERE UM PRODUTO
router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Produto adicionado'
    });
});

// RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_product', (req, res, next) => {
    const id = req.params.id_product;

    if (id === "especial") {
        res.status(200).send({
            mensagem: 'Usando GET de um produto especial.',
            id: id
        });
    }else {
        res.status(200).send({
            mensagem: 'Você passou o ID: ',
            id: id
        });
    };
});

// ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto alterado'
    });
});

// DELETA UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto deletado'
    });
});

module.exports = router;