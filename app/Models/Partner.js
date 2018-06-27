'use strict'

const Model = use('Model')

class Partner extends Model {
  json() {
    return{
      id: this.id,
      partner_name: this.partner_name,
      partner_cpf: this.partner_cpf
    }
  }
}

module.exports = Partner
