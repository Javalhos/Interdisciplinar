'use strict'

class NewAsset {
  get rules () {
    return {
      company_id: 'required|number',
      account_id: 'required|number',
      name: 'required',
      suffers: 'required',
      use: 'required',
      register_date: 'required',
      type: 'required',
      deprecation: 'required|number',
      life_time: 'required|number',
      value: 'required|number'
    }
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return {
      'required': 'O preenchimento deste campo é obrigatório.',
      'number': 'Apenas números serão aceitos neste campo.'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).json({ errors: errorMessages });
  }
}

module.exports = NewAsset
