import Boom from '@hapi/boom';

import Todo from '../models/todo';


/**
 * Get all users.
 *
 * @returns {Promise}
 */
export function getAllTodos() {
  return Todo.fetchAll(  );
}

/**
 * Get a user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getTodo(params) {
  return new Todo({ params })
    .fetchAll()
    .then(todo => todo)
    .catch(Todo.NotFoundError, () => {
      throw Boom.notFound('User not found');
    });
}

/**
 * Create new todo_list_item.
 *
 * @param   {Object}  user
 * @returns {Promise}
 */
export function createTodo(todo) {
  return new Todo({
    task: todo.task,
    description: todo.description,
    user_id: todo.user_id
  });
}


/**
 * Update a todo_list_item.
 *
 * @param   {Number|String}  id
 * @param   {Object}
 * @returns {Promise}
 */
export function updateTodo(id, todo) {
  return new Todo({ id }).save({ task: todo.task, description: todo.description });
}

/**
 * Delete a user_item.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteTodo(id) {
  return new Todo({ id }).fetch().then(todo => todo.destroy());
}
