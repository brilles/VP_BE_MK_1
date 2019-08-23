exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments();
    users.string('full_name', 128).notNullable();
    users
      .string('email', 128)
      .notNullable()
      .unique();
    users
      .string('phone_number', 128)
      .notNullable()
      .unique();
    users.string('password', 128).notNullable();
    users
      .string('verified_status')
      .defaultTo('unverified')
      .notNullable();
    users.integer('votes').defaultTo(0);
    //     users.timestamp('created_at').defaultTo(knex.fn.now());
    users
      .timestamp('created_at', {
        useTz: false
      })
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
