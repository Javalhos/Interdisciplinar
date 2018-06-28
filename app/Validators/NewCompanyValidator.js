'use strict'

class NewCompanyValidator {
  get rules () {
    return {
      company_id: 'required',
      company_name: 'required',
      social_name: 'required',
      cnpj: 'required|number',
      number: 'required|number',
      complement: '',
      neighborhood: 'required',
      city: 'required',
      cep: 'required|number',
      uf: 'required|max:2',
      tel_secondary: 'required|number',
      tel_principal: 'required|number',
      email: 'required|email'
    }
  }

  get validateAll(){
    return true;
  }

  get messages() {
    return {
      'required': 'O preenchimento deste campo é obrigatório.',
      'email': 'Insira um e-mail válido. Ex: xxx@xxx.xxx',
      'max': 'Você não pode inserir mais do que 2 caracteres neste campo.',
      'number': 'Apenas números serão aceitos neste campo.'
    }
  }

  async fails (errorMessages){
    return this.ctx.response.status(400).json({ errors: errorMessages });
  }
}

module.exports = NewCompanyValidator
