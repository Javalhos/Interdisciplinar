'use strict'

class NewCompanyValidator {
  get rules () {
    return {
      name: 'required',
      social_name: 'required',
      cnpj: 'required|regex:\\d*',
      address: 'required',
      neighborhood: 'required',
      city: 'required',
      zip: 'required|regex:\\d{8}',
      uf: 'required|max:2',
      tel_primary: 'required|regex:\\d*',
      tel_secondary: 'regex:\\d*',
      email: 'email',
      partners: 'array',
      'partners.*.name': 'requiredIf:partners',
      'partners.*.cpf': 'requiredIf:partners|regex:\\d{11}',
      'partners.*.telephone': 'requiredIf:partners|regex:\\d*'
    }
  }

  get validateAll(){
    return true;
  }

  get messages() {
    return {
      'required': 'O preenchimento deste campo é obrigatório.',
      'email': 'Insira um e-mail válido. Ex: xxx@xxx.xxx',
      'max': 'Você não pode inserir mais do que {{ argument.0 }} caracteres neste campo.',
      'regex': 'Apenas números serão aceitos neste campo.'
    }
  }

  async fails (errorMessages){
    return this.ctx.response.status(400).json({ errors: errorMessages });
  }
}

module.exports = NewCompanyValidator
