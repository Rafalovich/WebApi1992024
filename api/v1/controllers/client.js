const clientModel = require('../models/client');
module.exports = {
    getAllClients: (req, res) => {
        clientModel.find().then((client) => {
            return res.status(200).json(client);
        });
    },
    getClientById: (req, res) => {
        clientModel.find({ clid: req.params.id }).then((client) => {
            return res.status(200).json(client);
        });
    },
    addClient: (req, res) => {
        clientModel.insertMany([req.body]).then((client) => {
            return res.status(200).json(client);
        });
    },
    updateClient: (req, res) => {
        clientModel.updateOne({ clid: req.params.id }, req.body).then((client) => {
            return res.status(200).json(client);
        });
    },
    deleteClient: (req, res) => {
        clientModel.deleteOne({ clid: req.params.id }).then((client) => {
            return res.status(200).json(client);
        });
    }
}