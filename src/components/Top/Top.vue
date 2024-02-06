<template>
  <div class="top">
    <h2 class="top__title">
      ТОП
      <span>10</span>
    </h2>
    <swiper
      :spaceBetween="25"
      :navigation="true"
      :modules="modules"
      class="mySwiper slider__swiper"
      :breakpoints="swiperOption.breakpoints"
    >
      <swiper-slide class="top__slide" v-for="(top, i) in topArr" :key="top.id">
        <p class="top__num">{{ i + 1 }}</p>
        <div class="top__img">
          <img :src="imgPath + top.poster_path" alt="" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { useTop } from "@/stores/top.js";
import { imgPath } from "@/path.js";
import { computed } from "vue";
const topStore = useTop();
topStore.getTop();
const modules = [Navigation];
const topArr = computed(() => topStore.top);
const swiperOption = {
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 1.2,
    },
    400: {
      slidesPerView: 1.5,
    },
    500: {
      slidesPerView: 1.6,
    },
    600: {
      slidesPerView: 1.8,
    },
    650: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 2.2,
    },
    820: {
      slidesPerView: 2.5,
    },
    900: {
      slidesPerView: 3,
    },
  },
};
</script>
