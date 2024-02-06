<template>
  <div class="content" v-if="load">
    <h2 class="content__title">{{ type == "movie" ? "Все фильмы" : "Все Сереалы " }}</h2>
    <div class="content__box">
      <ContentCard
        v-for="movie in popularArr"
        :key="movie.id"
        :movie="movie"
        :type="type"
      />
    </div>
    <div class="content__item">
      <button class="content__item-prev" @click="prevPage">
        <img src="../../assets/images/arrowLeft.svg" alt="" />
        Prev
      </button>
      <div class="content__item-num">
        {{ page }}
        <span>...</span>
        {{ 500 }}
      </div>
      <button class="content__item-next" @click="nextPage">
        Next
        <img src="../../assets/images/arrowLeft.svg" alt="" />
      </button>
    </div>
  </div>
  <Loader v-else/>
</template>
<script setup>
import ContentCard from "./ContentCard.vue";
import { usePopular } from "@/stores/popular.js";
import { ref } from "vue";
import Loader from "../UI/Loader.vue";
const props = defineProps({
  type: String,
});
const popularStore = usePopular();
const page = ref(1);
const popularArr = ref(null);
const load = ref(true)
async function getContent() {
  load.value  = false
  await popularStore.getPopular(props.type, page.value);
  popularArr.value = popularStore[props.type];
  setTimeout(() => {
    load.value  = true
  }, 300);
}
getContent();
function nextPage() {
  page.value++;
  if (page.value > 500) {
    page.value = 1;
  }
  getContent();
}
function prevPage() {
  page.value--;
  if (page.value < 1) {
    page.value = 500;
  }
  getContent();
}
</script>
