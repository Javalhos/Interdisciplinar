'use strict'

const Bank = use('App/Models/Bank');

class BankController {

  async show(){
    let banks = await Bank.all();

    return {
      data: banks
    };
  }

  async store({ request, response }){
    let banks = Bank.create(request.only([
      'type', 'owner_account', 'account',
      'agency', 'account_quantity'
    ]));

    return response.status(201).json({
      message: 'Bank account created successfully.',
      banks
    })
  }
}

module.exports = BankController
