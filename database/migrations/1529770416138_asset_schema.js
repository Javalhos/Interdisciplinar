'use strict'

const Schema = use('Schema')

class AssetSchema extends Schema {
  up() {
    this.create('assets', (table) => {
      table.increments()
      table.integer('company_id').required()
      table.ingeger('account_id').required()
      table.string('name', 100)
      table.enum('suffers', [
        'depreciation',
        'amortization'
      ]).defaultsTo('depreciation')
      table.enum('use', [
        'administrative',
        'industrial'
      ]).defaultsTo('administrative')
      table.integer('register_date')
      table.enum('type', [
        'property',
        'furniture',
        'vehicle',
        'equipment',
        'brand'
      ])
      table.integer('depreciation_rate')
      table.integer('life_time')
      table.float('value')
      table.timestamps()
    })
  }

  down() {
    this.drop('assets')
  }
}

module.exports = AssetSchema
