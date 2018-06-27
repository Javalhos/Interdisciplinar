'use strict'

const Model = use('Model')

class Asset extends Model {
  json() {
    return {
      id: this.id,
      company_id: this.company_id,
      account_id: this.account_id,
      name: this.name,
      suffers: this.suffers,
      use: this.use,
      register_date: this.register_date,
      type: this.type,
      depreciation: this.depreciation_rate,
      life_time: this.life_time,
      value: this.value
    }
  }
}

module.exports = Asset
