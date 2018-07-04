'use strict'

const Company = use('App/Models/Company');
const Account = use('App/Models/Account');

class CompanyController {

  async index() {
    let companies = await Company.all();

    return { companies };
  }

  async show({ params }) {
    let company = await Company.find(params.id);

    await company.loadMany(['partners', 'assets', 'accounts']);
    return { company }
  }

  async store({ request, response }){
    let reqCompany = request.only([
      'name', 'social_name', 'cnpj',
      'address', 'address2', 'neighborhood', 'city', 'zip', 'uf',
      'tel_primary', 'tel_secondary', 'email'
    ]);
    let reqPartners = request.only(['partners']);

    const company = await Company.create(reqCompany);
    await company.partners().createMany(reqPartners.partners);

    return response.status(201).json({
      company
    });
  }

  async find({ params }){
    let companies = await Company.query().where('name', 'like', params.company_name).fetch();

    return { companies };
  }

  async destroyPartner({ params, response }) {
    const company = await Company.find(params.company_id);

    if (!company)
      return response.status(404).send({message: `Could not find Company with id '${params.company_id}'`});
    
    await company.partners().where('id', params.partner_id).delete();
    return response.status(202).send({message: 'Resource was marked for deletion!'});
  }

  async storeAccount({ params, response, request }) {
    const company = await Company.find(params.company_id);

    if (!company)
      return response.status(404).send({message: `Could not find Company with id '${params.company_id}'`});
    
    const account = await company.accounts().create(request.only([
      'name', 'type', 'bank', 'agency', 'account', 'balance'
    ]));

    if (!account)
      return response.status(500).send({ message: 'Failed to create a new account.' });
    return response.status(201).send({ message: 'Account created successfully!' });
  }

  async indexAccounts ({ params, response }) {
    const company = await Company.find(params.id);

    if (!company)
      return response.status(404).send({ message: 'Não foi possível encontrar a empresa.' });
    
    const accounts = await company.accounts().fetch();
    return { accounts };
  }

  async indexAssets ({ params, response }) {
    const company = await Company.find(params.id);

    if (!company)
      return response.status(404).send({ message: 'Não foi possível encontrar a empresa.' });
    
    const assets = await company.assets().fetch();
    return { assets };
  }

  async storeAssets({ params, response, request }) {
    const req = request.only([
      'account_id', 'name', 'description', 'suffers', 'use', 'type',
      'buy_date', 'depreciation_rate', 'life_time', 'value'
    ]);
    const company = await Company.find(params.id);
    const account = await Account.find(req.account_id);
    
    if (!company)
      return response.status(404).send({message: `Could not find Company with id '${params.company_id}'`});

    if (company.id != account.company_id)
      return response.status(400).send({ message: 'Invalid account_id' });

    if (req.value > account.balance)
      return response.status(400).send({ message: 'Saldo indisponível na conta!' });

    account.balance -= req.value;
    
    const asset = await company.assets().create(req);
    if (!asset)
      return response.status(500).send({ message: 'Failed to create a new asset.' });

    account.save();
    return response.status(201).send({ message: 'Asset created successfully!' });
  }

  async destroyAsset({ params, response }) {
    const company = await Company.find(params.company_id);

    if(!company)
      return response.status(404).send({message: `Could not find Company with id '${params.company_id}`});

    await company.assets().where('id', params.id).delete();
    return response.status(202).send({message: 'Resource was marked for deletion!'});                
  }
}

module.exports = CompanyController
