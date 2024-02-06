<template>
  <router-link :to="`/${movie.media_type}/${movie.id}`" class="content__card">
    <img :src="imgPath + movie.poster_path" alt="" />
    <h2 class="content__card-title">{{ movie.title || movie.name }}</h2>
  </router-link>
</template>
<script setup>
import { imgPath } from "../../path";
const props = defineProps({
  movie: Object,

});
</script>
