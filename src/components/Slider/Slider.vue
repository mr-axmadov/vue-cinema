<template>
  <div class="slider">
    <h2 class="slider__title">{{ type == "movie" ? "Фильмы" : "Сереалы" }}</h2>
    <swiper
      :spaceBetween="25"
      :navigation="true"
      :modules="modules"
      class="mySwiper slider__swiper"
      :breakpoints="swiperOption.breakpoints"
    >
      <swiper-slide
        class="slider__slide"
        v-for="(item, index) in popular"
        :key="index"
        @click="getId(item.id)"
      >
        <img :src="imgPath + item.poster_path" alt="" class="slider__img" />
      </swiper-slide>
      <swiper-slide class="slider__slide">
        <router-link class="slider__slide-link" :to="`/${type}`">
          <img src="@/assets/images/arrowLeft.svg" alt="" class="slider__slide-icon" />
          <span class="slider__slide-next">{{
            type == "movie" ? "Все фильмы" : "Все cереалы"
          }}</span>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
  <InfoBlock
    :selectMovie="selectMovie"
    :selectId="selectId"
    :type="type"
    @close="selectId = selectMovie = null"
  />
</template>

<script setup>
import { imgPath } from "@/path";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { usePopular } from "@/stores/popular";
import { computed, ref } from "vue";
import InfoBlock from "../InfoBlock/InfoBlock.vue";
import { useInfo } from "../../stores/info";
const infoStore = useInfo();
const popularStore = usePopular();
const props = defineProps({
  type: String,
});
const modules = [Navigation];
popularStore.getPopular(props.type);
const popular = computed(() => popularStore[props.type]);
const selectId = ref(null);
const selectMovie = ref(null);
async function getId(id) {
  selectId.value = id;
  selectMovie.value = null;
  await infoStore.getInfo(props.type, selectId.value);
  selectMovie.value = props.type == "movie" ? infoStore.infoMovie : infoStore.infoTv;
}
const swiperOption = {
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    350: {
      slidesPerView: 1.3,
    },
    400: {
      slidesPerView: 1.7,
    },
    550: {
      slidesPerView: 2,
    },
    650: {
      slidesPerView: 2.2,
    },
    700: {
      slidesPerView: 2.5,
    },
    820: {
      slidesPerView: 2.8,
    },
    900: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3.3,
    },
    1100: {
      slidesPerView: 3.7,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 4.5,
    },
    1600: {
      slidesPerView: 5,
    },
  },
};
</script>

<style lang="scss" scoped></style>
