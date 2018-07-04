'use strict'

class NewBankValidator {
  get rules () {
    return {
      company_id: 'required|regex:\\d*',
      type: 'required|in:Imobilizado',
      bank: 'required|in:Banco do Brasil,Itaú,Santander,Bradesco',
      account: 'required|regex:\\d*',
      agency: 'required|regex:\\d*',
      balance: 'required|regex:\\d*'
    }
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return {
      'required': 'É obrigatório o preenchimento deste campo.',
      'regex': 'Apenas números serão aceitos neste campo.',
      'in': 'Insira um valor válido!'
    }
  }

  async fails(errorMessages){
    return this.ctx.response.status(400).json({ errors: errorMessages });
  }
}

module.exports = NewBankValidator
