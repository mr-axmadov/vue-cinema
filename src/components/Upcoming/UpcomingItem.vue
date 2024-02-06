<template>
  <Transition name="up" mode="out-in">
    <div class="upcoming__item" v-if="index == slideView">
      <img :src="imgFullPath + movie.backdrop_path" alt="" class="upcoming__img" />
      <h1 class="upcoming__title">{{ movie.title }}</h1>
      <p class="upcoming__text">
        {{ movie.overview }}
      </p>
      <Btn />
      <div class="upcoming__next"  @click="$emit('next')">
        <img :src="imgPath + next.backdrop_path" alt="" class="upcoming__next-img" />
        <p class="upcoming__next-text">Следующий</p>
        <h3 class="upcoming__next-title">{{ next.title }}</h3>
        <div class="upcoming__next-line"></div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import Btn from "../UI/Btn.vue";
import { ref, onMounted } from "vue";
import { imgFullPath, imgPath } from "../../path";
const props = defineProps({
  movie: Object,
  next: Object,
  index: Number,
  slideView: Number,
});

</script>
<style>
.up-enter-active,
.up-leave-active {
  transition: 0.7s;
}
.up-enter-from,
.up-leave-to {
  opacity: 0;
  transform: scale(1.2);
}
</style>
