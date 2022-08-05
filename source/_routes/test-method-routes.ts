import express from 'express';
const router = express.Router();
import { TestMethodController } from '../_controllers/test-method-controller';
const _testmethodController= new TestMethodController();

router.get('/list', _testmethodController._findByFilter);
router.get('/:id', _testmethodController._findById);
router.get('/', _testmethodController._findAll);
router.post('/', _testmethodController._save);
router.put('/', _testmethodController._update);
router.delete('/:id', _testmethodController._delete);

export default router;