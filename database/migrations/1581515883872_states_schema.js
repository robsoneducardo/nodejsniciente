'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatesSchema extends Schema {
  up () {
    this.create('states', (table) => {
      table.increments()
      table.integer('code').notNullable().unique()
      table.string('name', 13).notNullable().unique()
      table.integer('macroregion_code')
      table.timestamps()
    })
  }

  down () {
    this.drop('states')
  }
}

module.exports = StatesSchema
