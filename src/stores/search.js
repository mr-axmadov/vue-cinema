import { defineStore } from "pinia";
import axios from "axios";
export const useSearch = defineStore('search', {
    state: () => ({
        search: null,
        searchArr: null
    }),
    actions: {
        async getSearch() {
            const res = await axios.get(`${import.meta.env.VITE_PATH}/search/multi?api_key=${import.meta.env.VITE_APIKEY}&language=ru-RU&page=1&query=${this.search}`)
            const data = res.data.results.filter(movie => movie.poster_path != null)
            this.searchArr = data
        }
    },
    getters: {}
})