import axios from 'axios';
import { BASE_URL, API_KEY } from './const';

// function settingUrl(query, page) {
//   return {
//     key: API_KEY,
//     q: query,
//     page: page,
//     per_page: 12,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   };
// }
// const trendingParams = {
//   api_key: API_KEY,
// };

export async function getTrandingMovie() {
  const res = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return res.data;
}
export async function getMovieById(id) {
  const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return res.data;
}

export async function getMovieByQuery(query) {
  const res = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return res.data;
}

export async function getCreditsById(id) {
  const res = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return res.data;
}

export async function getReviewsById(id) {
  const res = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return res.data;
}
// export default async function getImages(query, page) {
//   const params = new URLSearchParams(settingUrl(query, page));
//   const res = await axios.get(`${BASE_URL}?${params}`);
//   return res.data;
// }
