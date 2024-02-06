<template>
  <div class="info__card">
    <div class="info__desc">
      <h2 class="info__desc-title">{{ selectMovie.title || selectMovie.name }}</h2>
      <p class="info__desc-text">
        {{ selectMovie.overview }}
      </p>
      <div class="info__desc-content">
        <span>{{ selectMovie.release_date || selectMovie.last_air_date }}</span>
        <span v-for="ganr in selectMovie.genres" :key="ganr.id">
          {{ ganr.name }}
        </span>
        <span v-if="selectMovie.runtime">
          {{ Math.floor(selectMovie.runtime / 60) }}h
          {{ selectMovie.runtime % 60 }}m</span
        >
      </div>
      <button class="info__desc-btn">
        <img src="../../assets/images/play.svg" alt="" />
        Смотерть трейлер
      </button>
    </div>
    <div class="info__item">
      <img class="info__item-bg" :src="imgFullPath + selectMovie.backdrop_path" alt="" />
      <img class="info__item-img" :src="imgPath + selectMovie.poster_path" alt="" />
    </div>
    <div class="info__actors">
      <Actors :type="type" :id="selectMovie.id" :count="6" />
    </div>
  </div>
  <div class="container">
    <div class="info__box">
      <div class="info__budget">
        <h2 class="info__budget-title">Бюджет</h2>
        <p class="info__budget-text">
          {{
            selectMovie.budget
              ? `$ ${selectMovie.budget.toLocaleString()}`
              : "нет информации"
          }}
        </p>
      </div>
      <div class="info__budget">
        <h2 class="info__budget-title">Сборы</h2>
        <p class="info__budget-text">
          {{
            selectMovie.revenue
              ? `$ ${selectMovie.revenue.toLocaleString()}`
              : "нет информации"
          }}
        </p>
      </div>
      <div class="info__budget">
        <h2 class="info__budget-title">Статус</h2>
        <p class="info__budget-text">{{ selectMovie.status }}</p>
      </div>
      <div class="info__budget">
        <h2 class="info__budget-title">Исходное название</h2>
        <p class="info__budget-text">
          {{ selectMovie.original_title || selectMovie.original_name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { imgPath, imgFullPath } from "../../path.js";
import Actors from "../UI/Actors.vue";
const props = defineProps({
  selectMovie: Object,
  type: String,
});
</script>
