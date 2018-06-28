'use strict'

class NewBankValidator {
  get rules () {
    return {
      type: 'required',
      owner_account: 'required',
      account: 'required|number',
      agency: 'required|number',
      account_value: 'required|number'
    }
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return {
      'required': 'É obrigatório o preenchimento deste campo.',
      'number': 'Apenas números serão aceitos neste campo.'
    }
  }

  async fails(errorMessages){
    return this.ctx.response.status(400).json({ errors: errorMessages });
  }
}

module.exports = NewBankValidator
