'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MesoregionsSchema extends Schema {
  up () {
    this.create('mesoregions', (table) => {
      table.increments()
      table.integer('code').notNullable().unique()
      table.string('name', 13).notNullable().unique()
      table.integer('state_code')
      table.timestamps()
    })
  }

  down () {
    this.drop('mesoregions')
  }
}

module.exports = MesoregionsSchema
