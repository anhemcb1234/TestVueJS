import {Axios} from "./Axios";

export function getNews(payload) {
    return Axios.get(`?q=${payload}&pageSize=10&apiKey=1f5210480a3d48d487a6e90bd780eadc
    `);
}


export const useService = {
    getNews
};