//Base da URL: https://api.themoviedb.org/3/
//URL da API: movie/now_playing?api_key=3d0cdcaf8689838a282f3812936ea744&language=pt-BR

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;