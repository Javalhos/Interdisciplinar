import Auth from '../store/Auth';

export default (to, from, next) => {
  next(!Auth.isGuest ? { name: 'home' } : undefined);
}
