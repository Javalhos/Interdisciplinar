'use strict'

const Model = use('Model')

class Bank extends Model {
  json () {
    return {
      id: this.id,
      type: this.type,
      owner_account: this.owner_account,
      account: this.account,
      agency: this.agency,
      account_value: this.account_value
    }
  }
}

module.exports = Bank
