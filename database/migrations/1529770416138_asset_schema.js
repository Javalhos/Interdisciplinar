'use strict'

const Schema = use('Schema')

class AssetSchema extends Schema {
  up() {
    this.create('assets', (table) => {
      table.increments()
      table.integer('company_id').notNullable()
      table.integer('account_id').notNullable()
      table.string('name', 100).notNullable()
      table.text('description').defaultTo('')
      table.enum('suffers', [
        'depreciation',
        'amortization'
      ]).defaultTo('depreciation').notNullable()
      table.enum('use', [
        'administrative',
        'industrial'
      ]).defaultTo('administrative').notNullable()
      table.enum('type', [
        'property',
        'furniture',
        'vehicle',
        'equipment',
        'brand'
      ]).notNullable()
      table.date('buy_date').notNullable()
      table.integer('depreciation_rate').notNullable()
      table.integer('life_time').notNullable()
      table.float('value').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('assets')
  }
}

module.exports = AssetSchema
