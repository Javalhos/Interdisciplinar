'use strict'

const Schema = use('Schema')

class PartnerSchema extends Schema {
  up () {
    this.create('partners', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('partners')
  }
}

module.exports = PartnerSchema
