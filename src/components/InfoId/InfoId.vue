<template>
  <div class="info" v-if="selectMovie">
    <InfoCard :selectMovie="selectMovie" :type="type"/>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import InfoCard from "./InfoCard.vue";
import { useInfo } from "../../stores/info";
import { useRoute } from "vue-router";
const infoStore = useInfo();
const props = defineProps({
  type: String,
});
const router = useRoute();
onMounted(async () => {
  await infoStore.getInfo(props.type, router.params.id);
});
const selectMovie = computed(() => {
  return props.type == "movie" ? infoStore?.infoMovie : infoStore?.infoTv;
});
</script>
