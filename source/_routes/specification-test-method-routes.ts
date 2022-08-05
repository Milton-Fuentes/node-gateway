import express from 'express';
const router = express.Router();
import { SpecificationTestMethodController } from '../_controllers/specification-test-method-controller';
const _specificationtestmethodController= new SpecificationTestMethodController();

router.get('/list', _specificationtestmethodController._findByFilter);
router.get('/:id', _specificationtestmethodController._findById);
router.get('/', _specificationtestmethodController._findAll);
router.post('/all', _specificationtestmethodController._saveAllFindIds);
router.post('/', _specificationtestmethodController._save);
router.put('/', _specificationtestmethodController._update);
router.delete('/:id', _specificationtestmethodController._delete);

export default router;