const { generateHash } = require('../utils/hashing');

/**
 * Delete all existing entries and seed users table.
 *
 * @param   {Object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          name: 'Saugat Acharya',
          updated_at: new Date(),
          email: 'saugatacharya@gmail.com',
          password: generateHash('saugatMail@123')
        },
        {
          name: 'John Doe',
          updated_at: new Date(),
          email: 'johndoe@gmail.com',
          password: generateHash('johndoe@123')
        }
      ]);
    });
}
