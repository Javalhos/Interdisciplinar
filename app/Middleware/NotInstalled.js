'use strict'

const User = use('App/Models/User');

class NotInstalled {
  async handle({
    response
  }, next) {
    let count = await User.query().where('is_admin', 1).getCount();
    console.log(count);
    if (count > 0)
      return response.status(403).send({
        error: 'You are not authorized to access this resource.'
      });

    // call next to advance the request
    await next()
  }
}

module.exports = NotInstalled
