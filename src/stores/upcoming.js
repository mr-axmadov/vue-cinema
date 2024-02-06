import { defineStore } from "pinia";
import axios from "axios";
export const useUpcoming = defineStore('upcoming', {
    state: () => ({
        upcoming: null,
        fail: null
    }),
    actions: {
        async getUpcoming() {
            try {
                const res = await axios.get(`${import.meta.env.VITE_PATH}/movie/upcoming?api_key=${import.meta.env.VITE_APIKEY}&language=ru-RU&page=1`)
                this.upcoming = res.data.results
            } catch (error) {
                if (error.response.status == 401) {
                    this.fail = "Zaprosda xato ketgan"
                }
                else if (error.response.status == 404) {
                    this.fail = "404 Not Found"
                }
            }
        }
    },
    getters: {}
})