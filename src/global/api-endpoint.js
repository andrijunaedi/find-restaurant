import CONFIG from './config';

const { BASE_URL } = CONFIG;

const API = {
  list: `${BASE_URL}/list`,
  detail: (id) => `${BASE_URL}/detail/${id}`,
  review: `${BASE_URL}/review`,
};

export default API;
