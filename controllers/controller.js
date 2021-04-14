const data = require('../data');
const sources = require('../models/SourceModel')

module.exports = {
    add_source: (req, res) => {
        sources.create(req.body.source)
        .then(sourcesData =>{
            console.log(sourcesData);
            res.json({"message": "OK2", data: sourcesData});
        })
        .catch(err=>{
            console.log(err);
            res.json(err);
        })
    },
    sources: (req,res)=>{
        sources.find({})
        .then(sourcesData => {
            console.log(sourcesData);
            res.json({"message": "HELLO", data: sourcesData});
        })
        .catch(err=>{
            console.log(err);
            res.json(err);
        })
        
    },
    testing: (req,res) =>{
        res.json({"message": "WORKING"})
    },
    delete_source: (req, res) => {
        sources.findOneAndDelete({id: req.params.id})
        .then(sourcesData =>{
            console.log(sourcesData);
            res.json({"message":"WORKING", data: sourcesData})
        })
        .catch(err=>{
            console.log(err);
            res.json(err);
        })
    },
};