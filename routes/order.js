const express = require('express');
const router = express.Router();

// RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os pedidos'
    });
});

// INSERE UM PEDIDOS
router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Adiciona um pedido'
    });
});

// RETORNA OS DADOS DE UM PEDIDOS
router.get('/:id_order', (req, res, next) => {
    const id = req.params.id_order;
    res.status(200).send({
        mensagem: 'Detalhes do pedido: ',
        id_order: id_order
    });
});

// REMOVE UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido excluido'
    });
});

module.exports = router;