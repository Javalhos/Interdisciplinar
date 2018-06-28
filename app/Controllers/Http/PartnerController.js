'use strict'

const Partner = use('App/Models/Partner');

class PartnerController {

  async show() {
    let partners = await Partner.all()

    return {
      data: partners
    };
  }

  async store({ request, response }){
    let partners = Partner.create(request.only([
      'partner_name', 'partner_cpf'
    ]));

    return response.status(201).json({
      message: 'Partner registered successfully.',
      partners
    })
  }
}

module.exports = PartnerController
