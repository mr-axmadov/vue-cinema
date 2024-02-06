<template>
  <Upcoming />
  <Slider type="movie" />
  <Slider type="tv" />
  <Top />
</template>
<script setup>
import Slider from "../components/Slider/Slider.vue";
import Upcoming from "../components/Upcoming/Upcoming.vue";
import Top from "../components/Top/Top.vue";
</script>
