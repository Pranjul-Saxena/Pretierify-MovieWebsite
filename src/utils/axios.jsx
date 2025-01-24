import axios from 'axios';

//i want to create instance

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjIzYTcyZjUwYjBjMWQwNDdlMzdmMWJmMjA1ZDk4NSIsIm5iZiI6MTczNzQ1MzgwNC42MDYwMDAyLCJzdWIiOiI2NzhmNzBlYzJlZjViZTBiOWM1YjM3MDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vS2M3BdfIAEQnIBfwYwvmj69FdH4OMwEuMq8PBz-j1A'
    }
});

export default instance;