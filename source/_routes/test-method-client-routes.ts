import express from 'express';
const router = express.Router();
import { TestMethodClientController } from '../_controllers/test-method-client-controller';
const _testmethodtestmethodclientController= new TestMethodClientController();

router.get('/list', _testmethodtestmethodclientController._findByFilter);
router.get('/:id', _testmethodtestmethodclientController._findById);
router.get('/', _testmethodtestmethodclientController._findAll);
router.post('/', _testmethodtestmethodclientController._save);
router.put('/', _testmethodtestmethodclientController._update);
router.delete('/:id', _testmethodtestmethodclientController._delete);

export default router;