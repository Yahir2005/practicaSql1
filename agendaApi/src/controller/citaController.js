const Cita = require('../model');

const getAll = async (req,res)=>{
    try {
        const citas = await Cita.findAll();
        res.json(citas);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

const getById= async(req,res)=>{
    try {
        const cita = await Cita.findByPk(req.params.id);
        if(!cita) return res.status(404).json({error:'Cita no encontrada'});
        res.json(cita);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const create = async(req,res)=>{
    try {
        const cita = await Cita.create(req.body);
        res.status(201).json(cita);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

const update = async(req,res)=>{
    try {
        const cita = await Cita.findByPk(req.params.id);
        if(!cita) return res.status(404).json({error:'Cita no encontrada'});
        await cita.update(req.body);
        res.json(cita);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const remove = async(req,res)=>{
    try {
        const cita = await Cita.findByPk(req.params.id);
        if(!cita) return res.status(404).json({error:'Cita no encontrada'});
        await cita.update({Active:false});
        res.json({message:'Cita desactivada'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = {getAll, getById, create, update, remove} ;