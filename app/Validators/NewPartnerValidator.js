'use strict'

class NewPartnerValidator {
  get rules () {
    return {
      partner_name: 'required',
      partner_cpf: 'required|number'
    };
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return {
      'required': 'O preenchimento deste campo é obrigatório.',
      'number': 'Apenas números serão aceitos neste campo'
    };
  }

  async fails(errorMessages){
    return this.ctx.response.status(400).json({ errors: errorMessages });
  }
}

module.exports = NewPartnerValidator
