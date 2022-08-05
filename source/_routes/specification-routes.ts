import express from 'express';
const router = express.Router();
import { SpecificationController } from '../_controllers/specification-controller';
const _specificationController= new SpecificationController();

router.get('/list', _specificationController._findByFilter);
router.get('/:id', _specificationController._findById);
router.get('/', _specificationController._findAll);
router.post('/', _specificationController._save);
router.put('/', _specificationController._update);
router.delete('/:id', _specificationController._delete);

export default router;