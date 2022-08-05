import express from 'express';
const router = express.Router();
import { GenericTestController } from '../_controllers/generic-test-controller';
const _genericTestController = new GenericTestController();
router.get('/list', _genericTestController._findByFilter);
router.get('/:id', _genericTestController._findById);
router.get('/', _genericTestController._findAll);
router.post('/', _genericTestController._save);
router.put('/', _genericTestController._update);
router.delete('/:id', _genericTestController._delete);

export default router;