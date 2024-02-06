import { defineStore } from "pinia";
import axios from "axios";
export const useTop = defineStore('top', {
    state: () => ({
        top: null,
       
    }),
    actions: {
        async getTop() {
            const res = await axios.get(`${import.meta.env.VITE_PATH}/movie/top_rated?api_key=${import.meta.env.VITE_APIKEY}&language=ru-RU&page=1`)
            const data = res.data.results.filter((item,i)=>i<10)
            this.top = data
        }
    },
    getters: {}
})