const express = require('express');
const router = express.Router();

import { AuthController } from '../_controllers/auth-controller';
const _authController= new AuthController();

router.post('', _authController._login);


export default router;