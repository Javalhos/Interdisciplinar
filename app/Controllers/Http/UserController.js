'use strict'

class UserController {
  async load ({ auth, response }) {
    try {
      let user = await auth.current.user;
      return response.status(200).send({ user: user.json() });
    } catch (e) {
      return response.status(401).send({ error: { message: 'Unauthorized!' } });
    }
  }
}

module.exports = UserController
