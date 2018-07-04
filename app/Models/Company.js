'use strict'

const Model = use('Model')

class Company extends Model {
  partners() {
    return this.hasMany('App/Models/Partner');
  }

  assets() {
    return this.hasMany('App/Models/Asset');
  }

  accounts() {
    return this.hasMany('App/Models/Account');
  }
}

module.exports = Company
