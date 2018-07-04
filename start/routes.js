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
const Company = use('App/Models/Company')
const Asset = use('App/Models/Asset')
const User = use('App/Models/User')

Route.group(() => {
  // Simple Helper Routes
  Route.get('/info/installation', async () => {
    const User = use('App/Models/User');
    let count = await User.query().where('is_admin', 1).getCount();
    return {
      installed: (count > 0)
    };
  })

  // Auth Routes
  Route.post('/auth/firstAccess', 'AuthController.firstAccess')
    .middleware(['notInstalled'])
    .validator('SignupValidator');
  Route.post('/auth/signin', 'AuthController.signin').validator('LoginValidator');
  // Route.post('/auth/refresh', 'AuthController.refresh');

  // User Routes
  Route.get('/user', 'UserController.index').middleware(['auth']);
  Route.delete('/user/:id', 'UserController.destroy').middleware(['auth']);
  Route.get('/user/load', 'UserController.load').middleware(['auth']);
  Route.post('/user', 'UserController.store')
    .middleware(['auth'])
    .validator('SignupValidator');

  // Company Routes
  Route.get('/info/count', async () => {
    return {
      companyCount: await Company.getCount(),
      assetCount: await Asset.getCount(),
      userCount: await User.getCount()
    };
  }).middleware(['auth']);
  Route.get('/company', 'CompanyController.index').middleware(['auth']);
  Route.post('/company', 'CompanyController.store').middleware(['auth']);
  Route.get('/company/find/:company_name', 'CompanyController.find').middleware(['auth']);
  Route.get('/company/:id', 'CompanyController.show').middleware(['auth']);
  Route.delete('/company/:company_id/partner/:partner_id', 'CompanyController.destroyPartner');

  Route.get('/company/:id/account', 'CompanyController.indexAccounts').middleware(['auth']);
  // Route.post('/company/:id/account', 'CompanyController.storeAccounts').middleware(['auth']);
 
  Route.get('/company/:id/asset', 'CompanyController.indexAssets').middleware(['auth']);
  Route.post('/company/:id/asset', 'CompanyController.storeAssets')
    .middleware(['auth']);
  Route.delete('/company/:company_id/asset/:id', 'CompanyController.destroyAsset').middleware(['auth']);
 
  Route.get('/company/:id/asset/find/:nome', 'CompanyController.findAssets').middleware(['auth']);
  Route.post('/company/:company_id/account', 'CompanyController.storeAccount')
    .middleware(['auth'])
    .validator('NewBankValidator');

  Route.any('*', ({
    response
  }) => response.status(404).send({
    message: 'Not found'
  }));
}).prefix('/api/v1');

// Static Route
Route.any('*', ({
  view
}) => view.render('welcome'));
