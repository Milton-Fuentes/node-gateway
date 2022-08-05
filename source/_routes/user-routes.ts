import express from 'express';
const router = express.Router();
import { UserController } from '../_controllers/user-controller';
const _userController = new UserController();
router.get('/list', _userController._findByFilter);
router.get('/:id', _userController._findById);
router.get('/', _userController._findAll);
router.post('/', _userController._save);
router.put('/', _userController._update);
router.delete('/:id', _userController._delete);

export default router;