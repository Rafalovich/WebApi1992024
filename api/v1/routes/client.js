const router = require('express').Router();
const clientRouter = require('../controllers/client');

router.get('/',clientRouter.getAllClients);
router.get('/:id',clientRouter.getClientById);
router.post('/',clientRouter.addClient);
router.put('/:id',clientRouter.updateClient);
router.delete('/:id',clientRouter.deleteClient);

module.exports = router;