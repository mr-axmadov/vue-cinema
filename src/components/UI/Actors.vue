<template>
  <div v-if="actorArr" class="actor" v-for="actor in actorArr" :key="actor.id">
    <img class="actor__img" :src="imgPath + actor.profile_path" alt="" />
    <p class="actor__name">{{ actor.name }}</p>
  </div>
  <div v-else>
    <h1>{{ fail }}</h1>
  </div>
</template>
<script setup>
const a = 9;
import { useActor } from "../../stores/actor";
import { onMounted, computed } from "vue";
import { imgPath } from "../../path";
const props = defineProps({
  type: String,
  id: Number,
  count: Number,
});
const { type, id, count } = props;
const actorStore = useActor();
onMounted(() => actorStore.getActor(type, id, count));
const actorArr = computed(() =>
  type == "movie" ? actorStore.actorMovie : actorStore.actorTv
);
const fail = computed(() => actorStore.fail);
</script>
<style lang="scss">
.actor {
  color: #fff;
  border-radius: 30px;
  border: 1px solid #fff;
  background: rgba(20, 20, 20, 0.5);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 2px;
  padding-right: 15px;
  width: max-content;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
  }
}
</style>
