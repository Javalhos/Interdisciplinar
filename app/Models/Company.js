'use strict'

const Model = use('Model')

class Company extends Model {
  json() {
    return {
      id: this.id,
      company_id: this.company_id,
      company_name: this.company_name,
      social_name: this.social_name,
      cnpj: this.company_cnpj,
      number: this.company_number,
      complement: this.company_complement,
      neighborhood: this.neighborhood,
      city: this.company_city,
      cep: this.company_cep,
      uf: this.company_uf,
      tel_secondary: this.tel_secondary,
      tel_principal: this.tel_principal,
      email: this.c_email
    }
  }
}

module.exports = Company
