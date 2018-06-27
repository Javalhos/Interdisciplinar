'use strict'

const Schema = use('Schema')

class BankSchema extends Schema {
  up () {
    this.create('banks', (table) => {
      table.increments()
      table.enum('type', [
        'Banco do Brasil',
        'Itaú',
        'Santander',
        'Bradesco'
      ])
      table.string('owner_account')
      table.integer('account')
      table.integer('agency')
      table.integer('account_value')
      table.timestamps()
    })
  }

  down () {
    this.drop('banks')
  }
}

module.exports = BankSchema
