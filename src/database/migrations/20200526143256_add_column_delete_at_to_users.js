exports.up = function(knex) {
    return knex.schema.alterTable('users',function(table){
       table.timestamp('deleted_at')
    })
  };
  
  exports.down =knex=>knex.schema.alterTable('users',table=>{
      table.dropColumn('deleted_at')
  })