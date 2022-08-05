import express from 'express';
const router = express.Router();
import { ProjectController } from '../_controllers/project-controller';
const _projectController= new ProjectController();

router.get('/list', _projectController._findByFilter);
router.get('/:id', _projectController._findById);
router.get('/', _projectController._findAll);
router.post('/', _projectController._save);
router.put('/', _projectController._update);
router.delete('/:id', _projectController._delete);

export default router;