const express = require('express');

const mongoose = require('mongoose');

const MotosSchema = require('./database');

const MotoModel = require('./model');

const router = express.Router();

const motosFromBanco = mongoose.model('MotoModel', MotosSchema);

router.post('/cadastro', async (req, res) => {

    const novaMoto = await new MotoModel(req.body);

    novaMoto.save((err) => {
        if (err) {
            console.log(err);
            return res.status(400).send({ error: 'Falha ao cadastrar!' })
        }
        res.send({ novaMoto });
    });

});

router.get('/listar', (req, res) => {

    motosFromBanco.find((err, data) => {
        return res.send({ data });
    });
});

router.put('/alterar', (req, res) => {
    motosFromBanco.findByIdAndUpdate(req.body._Id, {
        name: req.body.name,
        desc: req.body.desc,
        horses: req.body.horses,
        color: req.body.color,
        autonomy: req.body.autonomy
    }, (err, data) => {
        if (err) {
            console.log(err)
            return res.send(err);
        }
        else {
            return res.send("atualizado com sucesso!");
        }
    });
});

router.delete('/excluir', async (req, res) => {
    motosFromBanco.deleteOne({ _id: req.body }, (err) => {
        if (err) {
            return res.send(err);
        }
        res.send("Moto excluída!")
    })
});

module.exports = app => app.use('/funcao', router);