import knexJs from 'knex';
import bookshelfJs from 'bookshelf';

import knexConfig from './knexfile';
const knex = knexJs(knexConfig);

/**
 * Database connection.
 */
const bookshelf = bookshelfJs(knex);

bookshelf.plugin(['bookshelf-virtuals-plugin']);
// module.exports = {knex};

module.exports = { bookshelf, knex }
