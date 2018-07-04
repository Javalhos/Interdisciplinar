const makeProps = (obj) => {
  let data = {
    _p: {},
    reset() {
      for (let key in this._p) {
        this._p[key].value = this._p[key].type();
      }
    }
  };

  for (let key in obj) {
    data._p[key] = {
      type: obj[key],
      value: obj[key]()
    };

    Object.defineProperty(data, key, {
      get: () => data._p[key].value,
      set: (val) => {
        if (typeof (val) != typeof (data._p[key].type())) {
          console.warn(`Property ${key}: Type error, tried to assign a value of wrong type: ${typeof(val)}.
             Casting to right type.`);
          data._p[key].value = data._p[key].type(val);
        } else {
          data._p[key].value = val;
        }
      },
      enumerable: true
    });
  }
  return data;
};


export default new Proxy({
  _loaded: false,
  _data: makeProps({
    id: Number,
    username: String,
    email: String,
    updated_at: Date,
    created_at: Date,
    is_admin: Boolean
  }),

  get loaded() {
    return this._loaded;
  },

  get data() {
    if (!this._loaded)
      return undefined;

    return this._data;
  },

  load(user) {
    for (let key in user) {
      if (this._data.hasOwnProperty(key))
        this._data[key] = user[key];
    }
    this._loaded = true;
  },

  reset() {
    this._data.reset();
    this._loaded = false;
  }
}, {
  get: (obj, prop) => prop in obj ? obj[prop] : obj.data && prop in obj.data ? obj.data[prop] : undefined
});
