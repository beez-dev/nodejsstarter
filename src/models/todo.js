const { bookshelf } = require('../db');

const TABLE_NAME = 'todo';

/**
 * Todo model.
 */
class Todo extends bookshelf.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }

  /**
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }
}

export default Todo;
