const {Visitante} = require('../model');

const getAll = async (req,res)=>{
    try {
        const visitantes = await Visitante.findAll();
        res.json(visitantes);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

const getById= async(req,res)=>{
    try {
        const visitante = await Visitante.findByPk(req.params.id);
        if(!visitante) return res.status(404).json({error:'Visitante no encontrado'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const create = async(req,res)=>{
    try {
        const visitante = await Visitante.create(req.body);
        res.status(201).json(visitante);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

const update = async(req,res)=>{
    try {
        const visitante = await Visitante.findByPk(req.params.id);
        if(!visitante) return res.status(404).json({error:'Visitante no encontrado'});
        await visitante.update(req.body);
        res.json(visitante);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const remove = async(req,res)=>{
    try {
        const visitante = await Visitante.findByPk(req.params.id);
        if(!visitante) return res.status(404).json({error:'visitante no encontrado'});
        await visitante.update({Active:false});
        res.json({message:'Visitante desactivado'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = {getAll, getById, create, update, remove} ;