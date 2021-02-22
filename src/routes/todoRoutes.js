import { Router } from 'express';

import * as todoController from '../controllers/todos';

const router = Router();

/**
 * GET /api/todos
 */
router.get('/:id', todoController.fetchUserById);

/**
 * GET /api/todos/:id
 */
// router.get('/', (req, res, next)=>{
//   console.log(req.params.id);
// });
// router.get('/:id', todoController.fetchAll);

/**
 * POST /api/todos
 */
// router.post('/', todoController.create);

/**
 * PUT /api/todos/:id
 */
// router.put('/:id', todoController.update);

/**
 * DELETE /api/todos/:id
 */
// router.delete('/:id', todoController.deleteTodo);

export default router;
