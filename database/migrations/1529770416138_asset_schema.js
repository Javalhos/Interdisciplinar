'use strict'

const Schema = use('Schema')

class AssetSchema extends Schema {
  up() {
    this.create('assets', (table) => {
      table.increments()
      table.integer('company_id').required()
      table.ingeger('account_id').required()
      table.string('name', 100)
      table.integer('life_time')
      table.integer('depreciation_rate')
      table.timestamps()
    })
  }

  down() {
    this.drop('assets')
  }
}

module.exports = AssetSchema
