import Auth from '../store/Auth';

export default (to, from, next) => {
  console.log(Auth.isLoggedIn)
  next(!Auth.isLoggedIn ? {
    name: 'login',
    query: { redirect: to.fullPath }
  } : undefined);
}
