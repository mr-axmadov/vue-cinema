import { defineStore } from "pinia";
import axios from "axios";
export const usePopular = defineStore('popular', {
    state: () => ({
        movie: null,
        tv: null
    }),
    actions: {
        async getPopular(type, page = 1) {
            const res = await axios.get(`${import.meta.env.VITE_PATH}/${type}/popular?api_key=${import.meta.env.VITE_APIKEY}&language=ru-RU&page=${page}`)
            const data = res.data.results
            this[type] = data
        }
    },
    getters: {}
})