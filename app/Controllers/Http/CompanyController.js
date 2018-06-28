'use strict'

const Company = use('App/Models/Company');

class CompanyController {

  async show() {
    let companies = await Company.all();

    return {
      data: companies
    };
  }

  async store({ request, response }){
    let companies = Company.create(request.only([
      'company_id', 'company_name', 'social_name',
      'company_cnpj', 'company_number', 'company_complement',
      'neighborhood', 'company_city', 'company_cep',
      'company_uf', 'tel_secondary', 'tel_principal',
      'c_email'
    ]));

    return response.status(201).json({
      message: 'Company created successfully.',
      companies
    })
  }

  async find({ params }){
    let company = await Company.findBy('company_name', params.company_name);

    console.log(company);
    return{
      data: company
    };
  }

}

module.exports = CompanyController
