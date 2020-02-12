'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CountiesSchema extends Schema {
  up () {
    this.create('counties', (table) => {
      table.increments()
      table.integer('code').notNullable().unique()
      table.string('name', 13).notNullable().unique()
      table.integer('state_code')
      table.integer('mesoregion_code')
      table.integer('microregion_code')
      table.timestamps()
    })
  }

  down () {
    this.drop('counties')
  }
}

module.exports = CountiesSchema
