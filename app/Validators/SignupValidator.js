'use strict'

class SignupValidator {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      username: 'required|min:4',
      email: 'required|email',
      password: 'required|min:5'
    }
  }

  get messages() {
    return {
      'required': 'Este campo é obrigatório',
      'email': 'Insira um email válido. Ex: xxx@xxx.xxx',
      'min': 'Este campo deve ter no mínimo {{ argument.0 }} caracteres.'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.badRequest({
      errors: errorMessages
    });
  }
}

module.exports = SignupValidator
