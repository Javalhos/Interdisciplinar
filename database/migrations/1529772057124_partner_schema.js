'use strict'

const Schema = use('Schema')

class PartnerSchema extends Schema {
  up () {
    this.create('partners', (table) => {
      table.increments()
      table.integer('company_id').notNullable()
      table.string('name').notNullable()
      table.string('cpf', 11).notNullable()
      table.string('telephone').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('partners')
  }
}

module.exports = PartnerSchema
