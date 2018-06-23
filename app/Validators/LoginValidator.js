'use strict'

class LoginValidator {
  get rules() {
    return {
      email: 'required|email',
      password: 'required|min:5'
    }
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return {
      'required': 'Este campo é obrigatório',
      'email': 'Insira um email válido. Ex: xxx@xxx.xxx',
      'min': 'Este campo deve ter no mínimo 5 caracteres.'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).json({ errors: errorMessages });
  }
}

module.exports = LoginValidator
