'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MicroregionsSchema extends Schema {
  up () {
    this.create('microregions', (table) => {
      table.increments()
      table.integer('code').notNullable().unique()
      table.string('name', 13).notNullable().unique()
      table.integer('state_code')
      table.integer('mesoregion_code')
      table.timestamps()
    })
  }

  down () {
    this.drop('microregions')
  }
}

module.exports = MicroregionsSchema
