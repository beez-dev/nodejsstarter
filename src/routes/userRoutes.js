import { Router } from 'express';

import * as userController from '../controllers/users';
import { findUser, userValidator } from '../validators/userValidator';
import { authenticate } from '../validators/userAuthenticate';


const router = Router();

/**
 * GET /api/users
 */
router.get('/', userController.fetchAll);

/**
 * GET /api/users/:id
 */
router.get('/:id', userController.fetchById);

/**
 * POST /api/users
 */
router.post('/', userValidator, userController.create);


router.post('/login',authenticate,
                    (req,
                       res, next)=>{
    res.send('something');
})



/**
 * PUT /api/users/:id
 */
router.put('/:id', findUser, userValidator, userController.update);

/**
 * DELETE /api/users/:id
 */
router.delete('/:id', findUser, userController.deleteUser);



export default router;
