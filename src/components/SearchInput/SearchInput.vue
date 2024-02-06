<template>
  <div class="search">
    <div class="container">
      <input
        type="text"
        class="search__input"
        placeholder="Найти фильм, сериал..."
        v-model="value"
      />
      <div class="content__box">
        <SearchCard v-for="movie in searchArr" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </div>
</template>
<script setup>
import SearchCard from "./SearchCard.vue";
import { computed, onUnmounted } from "vue";
import { useSearch } from "../../stores/search.js";
const searchStore = useSearch();
const value = computed({
  get: () => searchStore.search,
  set: (val) => {
    searchStore.search = val;
    searchStore.getSearch();
  },
});
const searchArr = computed(() => searchStore.searchArr);
onUnmounted(() => (searchStore.search = ""), (value.value = null));
</script>
