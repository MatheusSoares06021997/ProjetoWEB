const express = require('express');

const MotoModel = require('./database');

const router = express.Router();

router.post('/cadastro', async(req, res) => {
    const novaMoto = await new MotoModel(req.body);
    novaMoto.save((err)=>{
        if(err){
            console.log(err);
            return res.status(400).send({error: 'Falha ao cadastrar!'})
        }
        res.send({novaMoto});
    });
});

module.exports = app => app.use('/funcao', router);