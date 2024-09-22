const router = require('express').Router();
const categoryControler = require('../controllers/category');

router.get('/',categoryControler.getAllCategorys);
router.get('/:id',categoryControler.getCategoryById);
router.post('/',categoryControler.addCategory);
router.put('/:id',categoryControler.updateCategory);
router.delete('/:id',categoryControler.deleteCategory);

module.exports = router;