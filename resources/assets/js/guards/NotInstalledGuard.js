import { get } from '../helpers/Api';

export default (to, from, next) => {
  get('/info/installation')
    .then(res => {
      if (!res.data.installed)
        next();
      else
        next({ name: 'home' });
    })
    .catch(err => {
      console.log(err);
      next(false);
    });
}
