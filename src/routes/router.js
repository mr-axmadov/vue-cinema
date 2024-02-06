import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import NotFound from "../view/404.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: "Home", component: Home },
        { path: '/movie', name: "Movie", component: () => import("../view/Movie.vue") },
        { path: '/tv', name: "Tv", component: () => import("../view/Tv.vue") },
        { path: '/search', name: "Search", component: () => import("../view/Search.vue") },
        { path: '/:catchAll(.*)', name: "notFound", component: NotFound },
        { path: '/movie/:id', name: "movieId", component: () => import("../view/MovieId.vue") },
        { path: '/tv/:id', name: "tvId", component: () => import("../view/TvId.vue") },
    ]
})
export default router