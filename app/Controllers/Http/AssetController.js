'use strict'

const Asset = use('App/Models/Asset');

class AssetController {

  async show() {
    let assets = await Asset.all();

    return {
      data: assets
    }
  }

  async store({ response, request }){
  }
}

module.exports = AssetController
