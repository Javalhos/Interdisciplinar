'use strict'

const Schema = use('Schema')

class CompanySchema extends Schema {
  up () {
    this.create('companies', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('social_name').notNullable()
      table.string('cnpj', 20).notNullable().unique()
      table.string('address', 100)
      table.string('address2', 70)
      table.string('neighborhood', 100)
      table.string('city', 100)
      table.string('zip', 8)
      table.string('uf')
      table.string('tel_primary', 20)
      table.string('tel_secondary', 20)
      table.string('email')
      table.timestamps()
    })
  }

  down () {
    this.drop('companies')
  }
}

module.exports = CompanySchema
