'use strict'

const User = use('App/Models/User');
const {
  validate
} = use('Validator');

class AuthController {
  // Registro de novos funcionários
  async firstAccess({ auth, request, response }) {
    const user = await User.create(request.only([
      'username',
      'email',
      'password'
    ]));

    if (!user)
      return response.status(500).send({
        error: {
          message: 'Failed when trying to register a new user.'
        }
      });

    // Set it as Admin
    user.is_admin = true;
    user.save();

    return response.status(201).send({
      tokens: await auth
        .withRefreshToken()
        .generate(user),
      user: user.toJSON()
    });
  }

  // Login
  async signin({ request, auth }) {
    let { email, password } = request.all();

    let tokens = await auth
      .withRefreshToken()
      .attempt(email, password);
    console.log(await auth.user);
    return tokens;
  }

  async refresh({ auth, request, response }) {
    const rules = {
      'refresh_token': 'required'
    };

    const refreshToken = request.input('refresh_token');

    const validation = await validate(request.only(['refresh_token']), rules);

    if (validation.fails())
      return response.badRequest({
        error: 'Refresh Token not present in the request.'
      });

    const token = await auth
      .newRefreshToken()
      .generateForRefreshToken(refreshToken);
    if (token) {
      return token;
    }

    return response.badRequest({
      error: {
        message: 'Invalid Refresh Token!'
      }
    });
  }
}

module.exports = AuthController
