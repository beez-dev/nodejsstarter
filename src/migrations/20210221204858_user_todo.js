/**
 * Create table `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('todo', table => {
    table.increments();
    table
      .timestamp('created_at')
      .notNullable()
      .defaultTo(knex.raw('now()'));
    table
      .timestamp('updated_at')
      .notNullable()
      .defaultTo(knex.raw('now()'));
    table.text('task')
      .notNullable()
      .defaultTo('USER TASK');
    table.text('description');
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id')
      .onDelete('CASCADE');


  });
}

/**
 * Drop `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('todo');
}
