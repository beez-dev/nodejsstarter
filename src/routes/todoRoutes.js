import { Router } from 'express';

import * as todoController from '../controllers/todos';

const router = Router();

router.get('/', todoController.fetchAll);

/**
 * GET /api/todos
 */
router.get('/:id', todoController.fetchByUserId);

/**
 * POST /api/todos
 */
router.post('/', todoController.create);

/**
 * PUT /api/todos/:id
 */
router.put('/:id', todoController.update);

/**
 * DELETE /api/todos/:id
 */
router.delete('/:id', todoController.deleteTodo);

export default router;
