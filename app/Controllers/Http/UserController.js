'use strict'

const User = use('App/Models/User');

class UserController {
  async index () {
    const users = await User.all();

    return { users };
  }

  async store ({ request, response }) {
    let user = await User.create(request.only([
      'username', 'email', 'password'
    ]));

    if (!user)
      return response.status(400).send({ message: 'Invalid arguments' });

    user.is_admin = false;
    user.save();
    return response.status(201).json({
      user
    });
  }

  async load ({ auth, response }) {
    try {
      let user = await auth.current.user;
      return response.status(200).send({ user: user.toJSON() });
    } catch (e) {
      return response.status(401).send({ error: { message: e.message } });
    }
  }

  async destroy ({ response, params }) {
    const user = await User.find(params.id);

    if (!user)
      return response.status(404).send({ message: 'Could not find the given user.' });

    await user.delete();
    return response.status(202).send({ message: 'Resource was marked for deletion!' });
  }
}

module.exports = UserController
