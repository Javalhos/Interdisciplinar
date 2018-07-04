'use strict'

const Schema = use('Schema')

class AccountSchema extends Schema {
  up () {
    this.create('accounts', (table) => {
      table.increments()
      table.integer('company_id').notNullable()
      table.string('name', 30).notNullable().unique()
      table.enum('type', [
        'Imobilizado'
      ]).notNullable()
      table.enum('bank', [
        'Banco do Brasil',
        'Itaú',
        'Santander',
        'Bradesco'
      ]).notNullable()
      table.integer('account').notNullable()
      table.integer('agency').notNullable()
      table.integer('balance').notNullable().defaultTo(0);
      table.timestamps()
    })
  }

  down () {
    this.drop('accounts')
  }
}

module.exports = AccountSchema
