import { defineStore } from "pinia";
import axios from "axios";
export const useInfo = defineStore('info', {
    state: () => ({
        infoMovie: null,
        infoTv: null
    }),
    actions: {
        async getInfo(type, id, page = 1) {
            const res = await axios.get(`${import.meta.env.VITE_PATH}/${type}/${id}?api_key=${import.meta.env.VITE_APIKEY}&language=ru-RU&page=${page}`)
            const data = res.data
            if (type == 'movie') this.infoMovie = data
            else this.infoTv = data
        }
    },
    getters: {}
})
