'use strict'

class NewAsset {
  get rules () {
    return {
      company_id: 'required|regex:\\d*',
      account_id: 'required|regex:\\d*',
      name: 'required',
      suffers: 'required',
      use: 'required',
      register_date: 'required',
      type: 'required',
      deprecation: 'required|regex:\\d*',
      life_time: 'required|regex:\\d*',
      value: 'required|regex:\\d*'
    }
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return {
      'required': 'O preenchimento deste campo é obrigatório.',
      'regex': 'Apenas números serão aceitos neste campo.'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).json({ errors: errorMessages });
  }
}

module.exports = NewAsset
