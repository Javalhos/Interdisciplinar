class Form {
  constructor(obj) {
    if (!obj || Object.keys(obj).length < 1)
      throw Error('You can\'t create a form without fields!');

    this._initial = {}
    this.data = {}
    this._errors = {
      keys: [],
      messages: {}
    }

    for (let key in obj) {
      this._initial[key] = obj[key];
      this.data[key] = obj[key];
      this._errors.keys.push(key);
      this._errors.messages[key] = '';
    }
  }

  get err() {
    return Object.create(this._errors.messages);
  }

  resetErrors() {
    for (let key of this._errors.keys) {
      this._errors.messages[key] = '';
    }
  }

  resetForm() {
    for (let key of this._errors.keys) {
      this.data[key] = this._initial[key];
      this._errors.messages[key] = '';
    }
  }

  setErrors(errors) {
    if (typeof (errors) != 'object') {
      console.error('Form: Tried to set errors to something other than an Object.', errors);
      return;
    }

    for (let key in errors) {
      if (!this._errors.keys.includes(key))
        continue;

      if (typeof (errors[key]) != 'string') {
        console.error(`Form: expected type string of key ${key}, but received type ${typeof(errors[key])}`);
        continue;
      }

      this._errors.messages[key] = errors[key];
    }
  }
}

export default class FormFactory {
  static makeForm(obj) {
    return new Form(obj);
  }
}
