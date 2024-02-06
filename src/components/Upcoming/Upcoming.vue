<template>
  <div class="upcoming">
    <UpcomingItem
      v-if="upcomingArr"
      v-for="(movie, i) in upcomingArr"
      :key="movie.id"
      :movie="movie"
      :index="i"
      :next="upcomingArr[i == upcomingArr.length - 1 ? 0 : i + 1]"
      :slideView="slideView"
      @next="slide()"
    />
    <Loader v-else />

  </div>
</template>
<script setup>
import UpcomingItem from "./UpcomingItem.vue";
import { useUpcoming } from "../../stores/upcoming";
import { computed, ref, onMounted } from "vue";
import Loader from "../UI/Loader.vue";
const useUp = useUpcoming();
useUp.getUpcoming();
const slideView = ref(0);
let timeOut = ref(null);
const upcomingArr = computed(() => useUp.upcoming);
function slide() {
  clearTimeout(timeOut);
  if (slideView.value == upcomingArr.value.length - 1) {
    slideView.value = 0;
  } else {
    slideView.value++;
  }
  timeOut = setTimeout(slide, 10000);
}
onMounted(() => {
  timeOut = setTimeout(slide, 10000);
});
</script>
