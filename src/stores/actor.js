import { defineStore } from "pinia";
import axios from "axios";
export const useActor = defineStore('actor', {
    state: () => ({
        actorMovie: null,
        actorTv: null,
        fail: null
    }),
    actions: {
        async getActor(type, id, count) {
            try {
                const res = await axios.get(`${import.meta.env.VITE_PATH}/${type}/${id}/credits?api_key=${import.meta.env.VITE_APIKEY}&language=ru-RU&page=1`)
                const data = res.data.cast
                const arr = []
                data.forEach(actor => {
                    if (arr.length < count) arr.push(actor)
                });
                if (type == 'movie') this.actorMovie = arr
                else this.actorTv = arr

            } catch (error) {
                if (error.response.status == 401) {
                    this.fail = "Zaprosda xato ketgan"
                }
                else if (error.response.status == 404) {
                    this.fail = "404 malumot yoq"
                }
            }
        }
    },
    getters: {}
})