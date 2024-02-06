<template>
  <div class="infoblock" :class="{ active: selectId != null }">
    <Transition name="info" mode="out-in">
      <div class="infoblock__item" v-if="selectMovie">
        <div class="infoblock__img">
          <img :src="imgFullPath + selectMovie.backdrop_path" alt="" />
        </div>
        <button class="infoblock__close" @click="$emit('close')">
          <img src="../../assets/images/close.svg" alt="" />
        </button>
        <div class="infoblock__desc">
          <h2 class="infoblock__title">{{ selectMovie.title || selectMovie.name }}</h2>
          <p class="infoblock__text">
            {{ selectMovie.overview }}
          </p>
          <div class="infoblock__content">
            <span>{{ selectMovie.release_date || selectMovie.last_air_date }}</span>
            <span v-for="ganr in selectMovie.genres" :key="ganr.id">
              {{ ganr.name }}
            </span>
            <span>
              {{ Math.floor(selectMovie.runtime / 60) }}h
              {{ selectMovie.runtime % 60 }}m</span
            >
          </div>
          <div class="infoblock__actors">
            <Actors :type="type" :id="selectId" :count="4" />
          </div>
          <Btn />
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import Btn from "@/Components/UI/Btn.vue";
import { imgFullPath } from "../../path";
import Actors from "../UI/Actors.vue";

const props = defineProps({
  selectId: Number,
  selectMovie: Object,
  type: String,
});
</script>
<style>
.info-enter-active,
.info-leave-active {
  transition: 0.7s;
}
.info-enter-from,
.info-leave-to {
  opacity: 0;
}
</style>
