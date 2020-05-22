exports.up = knex=>knex.schema.createTable('projects',table=>{
    table.increments('id')
    table.text('title') 
    
    //relacionamentos
    table.integer('user_id')
        .references('users_id')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamps(true,true)

})

exports.down = knex =>knex.schema.droppTable('projects')