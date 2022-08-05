const express = require('express');
const router = express.Router();

import {OriginatorController} from '../_controllers/originator-controller';
const _originatorController= new OriginatorController();
router.get('/list', _originatorController._findByFilter);
router.get('/:id', _originatorController._findById);
router.get('/', _originatorController._findAll);
router.post('/', _originatorController._save);
router.put('/', _originatorController._update);
router.delete('/:id', _originatorController._delete);

export default router;