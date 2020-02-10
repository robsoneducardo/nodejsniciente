'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MacroregionsSchema extends Schema {
  up () {
    this.create('macroregions', (table) => {
      table.increments()
      table.string(name, 13).notNullable().unique()
      table.integer(code).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('macroregions')
  }
}

module.exports = MacroregionsSchema
