'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.group(() => {
  // Auth Routes
  Route.post('/auth/signup', 'AuthController.signup').validator('SignupValidator');
  Route.post('/auth/signin', 'AuthController.signin').validator('LoginValidator');
  Route.post('/auth/refresh', 'AuthController.refresh');

  // User Routes
  Route.get('/user/load', 'UserController.load').middleware(['auth']);

  Route.any('*', ({ response }) => response.status(404).send({ message: 'Not found' }));
}).prefix('/api/v1');

// Static Route
Route.any('*', ({ view }) => view.render('welcome'));

