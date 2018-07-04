import User from './User';
import { get } from '../helpers/Api';
import { router } from '../router';

export default {
  options: {
    remember: true
  },

  state: {
    token: null,
    refresh_token: null
  },

  get isAdmin() {
    this.initialize();
    return !!User.is_admin;
  },

  get isLoggedIn() {
    this.initialize();
    if (!User.loaded) {
      get('/user/load')
        .then(res => {
          User.load(res.data.user);
        })
        .catch(console.error);
    }
    return !!this.state.token;
  },

  get isGuest() {
    this.initialize();
    return !this.isLoggedIn;
  },

  initialize() {
    this.state.token = localStorage.getItem('anima_token');
    this.state.refresh_token = localStorage.getItem('anima_refresh_token');
  },

  set(token, refreshToken, remember = true) {
    this.options.remember = !!remember;

    if (this.options.remember) {
      localStorage.setItem('anima_token', token);
      localStorage.setItem('anima_refresh_token', refreshToken);
    } else {
      this.remove();
    }

    this.state.token = token;
    this.state.refresh_token = refreshToken;
  },

  remove() {
    localStorage.removeItem('anima_token');
    localStorage.removeItem('anima_refresh_token');
    this.initialize();
  }
}
