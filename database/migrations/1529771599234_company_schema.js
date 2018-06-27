'use strict'

const Schema = use('Schema')

class CompanySchema extends Schema {
  up () {
    this.create('companies', (table) => {
      table.increments()
      table.integer('company_id').notNullable().required()
      table.string('company_name').notNullable().required()
      table.string('social_name').notNullable().required()
      table.integer('company_cnpj').required()
      table.integer('company_number')
      table.string('company_complement')
      table.string('neighborhood')
      table.string('company_city')
      table.integer('company_cep')
      table.string('company_uf')
      table.integer('tel_secundary')
      table.integer('tel_principal')
      table.string('c_email')
      table.timestamps()
    })
  }

  down () {
    this.drop('companies')
  }
}

module.exports = CompanySchema
