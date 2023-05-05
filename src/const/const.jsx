import axios from 'axios';

export const API_KEY = 'a28892c9adcb905c064a29bd23dc557e';
// https://api.themoviedb.org/3/movie/550?api_key=a28892c9adcb905c064a29bd23dc557e
// token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjg4OTJjOWFkY2I5MDVjMDY0YTI5YmQyM2RjNTU3ZSIsInN1YiI6IjY0NTRkZWM5ZDQ4Y2VlMDEzNmRhMTY3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GgD3kxMIuPq4B2WK4Gfb-zNM4K_E3DnnNvhA3uinp3s
axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
