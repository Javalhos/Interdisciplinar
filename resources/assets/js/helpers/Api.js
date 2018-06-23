import axios from 'axios';
import Auth from '../store/auth';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const csrfToken = document.head.querySelector('meta[name="csrf-token"]');
if (csrfToken)
  axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken.content;

export const get = url => axios.get(`/api/v1${url}`, {
  headers: { 'Authorization': `Bearer ${Auth.state.token}` }
});

export const post = (url, data) => axios.post(`/api/v1${url}`, data, {
  headers: { 'Authorization': `Bearer ${Auth.state.token}` }
});

export const put = (url, data) => axios.put(`/api/v1${url}`, data, {
  headers: { 'Authorization': `Bearer ${Auth.state.token}` }
});

export const del = url => axios.delete(`/api/v1${url}`, {
  headers: { 'Authorization': `Bearer ${Auth.state.token}` }
});

export const interceptors = cb => {
  axios.interceptors.response.use(res => res, (err) => {
    return cb(err);
  });
};
