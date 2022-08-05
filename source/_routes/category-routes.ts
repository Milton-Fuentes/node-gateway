//const express = require('express');
const router = require('express').Router();

import { CategoryController } from '../_controllers/category-controller';
const _categoryController= new CategoryController();

router.get('/:id', _categoryController._findById);
router.get('/', _categoryController._findAll);
router.get('/', _categoryController._findAll);


router.post('/', _categoryController._save);
router.put('/', _categoryController._update);
router.delete('/:id', _categoryController._delete);

export default router;