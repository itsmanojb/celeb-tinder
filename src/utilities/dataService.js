import request, { getAuthorizedURL } from './request';
import Config from '../utilities/config';

function search(query, page = 1) {
  return request({
    url: getAuthorizedURL(`search/person`, `query=${query}&page=${page}`),
    method: 'GET',
  });
}

function getTopCelebrities(timing = 'day') {
  // timing: 'week' | 'day'
  return request({
    url: getAuthorizedURL(`trending/person/${timing}`),
    method: 'GET',
  });
}

function getPopularCelebrities(page = 1) {
  return request({
    url: getAuthorizedURL(`person/popular`, `page=${page}`),
    method: 'GET',
  });
}

function getCelebrityDetails(id) {
  return request({
    url: getAuthorizedURL(`person/${id}`),
    method: 'GET',
  });
}

function getCelebPhotoUrl(path, size, secure = true) {
  if (!path) return;
  let imgSize = '';
  const baseUrl = secure
    ? Config.images.secure_base_url
    : Config.images.base_url;
  switch (size) {
    case 's':
      imgSize = Config.images.profile_sizes[0];
      break;
    case 'm':
      imgSize = Config.images.profile_sizes[1];
      break;
    case 'l':
      imgSize = Config.images.profile_sizes[2];
      break;
    default:
      imgSize = 'original';
      break;
  }
  return `${baseUrl}${imgSize}${path}`;
}

const DataService = {
  search,
  getTopCelebrities,
  getPopularCelebrities,
  getCelebPhotoUrl,
  getCelebrityDetails,
};

export default DataService;
