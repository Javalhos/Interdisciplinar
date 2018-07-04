import { get } from '../helpers/Api';

export default (to, from, next) => {
  get('/info/installation')
    .then(res => {
      if (res.data.installed)
        next();
      else
        next({ path: '/auth/firstAccess' });
    })
    .catch(err => {
      console.log(err);
      next(false);
    });
}
