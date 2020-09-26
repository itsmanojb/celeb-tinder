import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const request = function (options) {
  const onSuccess = function (response) {
    return response.data;
  };

  const onError = function (error) {
    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export function getAuthorizedURL(url, qParams) {
  const authURL = `${url}?api_key=${process.env.REACT_APP_APIKEY}`;
  return qParams ? `${authURL}&${qParams}` : authURL;
}

export default request;
