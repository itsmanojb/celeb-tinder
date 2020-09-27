import request, { getAuthorizedURL } from './request';
import Config from '../utilities/config';

function search(query, page = 1) {
  return request({
    url: getAuthorizedURL(`search/person`, `query=${query}&page=${page}`),
    method: 'GET',
  });
}

function getCelebrityPhotos(id) {
  return request({
    url: getAuthorizedURL(`person/${id}/images`),
    method: 'GET',
  });
}

function getCelebrityDetails(id) {
  return request({
    url: getAuthorizedURL(`person/${id}`),
    method: 'GET',
  });
}

function getCelebPhotoUrl(path, size = 'l', secure = true) {
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

function getCelebPofilesUrl(path, size = 'l', secure = true) {
  if (!path) return;
  let imgSize = '';
  const baseUrl = secure
    ? Config.images.secure_base_url
    : Config.images.base_url;
  switch (size) {
    case 's':
      imgSize = Config.images.still_sizes[0];
      break;
    case 'm':
      imgSize = Config.images.still_sizes[1];
      break;
    case 'l':
      imgSize = Config.images.still_sizes[2];
      break;
    default:
      imgSize = 'original';
      break;
  }
  return `${baseUrl}${imgSize}${path}`;
}

const DataService = {
  search,
  getCelebrityDetails,
  getCelebPhotoUrl,
  getCelebrityPhotos,
  getCelebPofilesUrl,
};

export default DataService;
