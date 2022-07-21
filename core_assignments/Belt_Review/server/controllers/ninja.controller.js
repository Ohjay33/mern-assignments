const Ninja = require("../models/ninja.model");


module.exports.findAllNinjas = (req,res)=>{
    Ninja.find()
        .then(allNinjas =>{
            res.json({results: allNinjas})
        })
        .catch(err=>{
            res.json(err)
        })
}
 
module.exports.createNewNinja = (req,res)=>{
    Ninja.create(req.body)
        .then(newlyCreatedNinja =>{
            res.json({results: newlyCreatedNinja})
        })
        .catch(err=>{
            res.json(err)
        })
}
 
module.exports.findOneNinja = (req,res)=>{
    Ninja.findOne({_id: req.params.id})
        .then(ninja =>{
            res.json({results: ninja})
        })
        .catch(err=>{
            res.json(err)
        })
}
 
module.exports.updateOneNinja = (req,res)=>{
    Ninja.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedNinja =>{
            res.json({results: updatedNinja})
        })
        .catch(err=>{
            res.json(err)
        })
}
module.exports.deleteNinja = (req,res)=>{
    Ninja.deleteOne({_id: req.params.id})
        .then(ninja =>{
            res.json({results: ninja})
        })
        .catch(err=>{
            res.json(err)
        })
}
 
