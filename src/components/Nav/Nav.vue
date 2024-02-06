<template>
  <nav class="nav">
    <div class="container">
      <div class="nav__box">
        <routerLink to="/" class="nav__logo">
          <img src="../../assets/images/Logo.svg" alt="" />
        </routerLink>
        <button class="nav__burger" @click="burger = true">
          <img src="../../assets/images/burger.svg" alt="" />
        </button>
        <ul class="nav__list" :class="{ active: burger }">
          <button class="nav__close" @click="burger = false">
            <img src="../../assets/images/close.svg" alt="" />
          </button>
          <li>
            <routerLink to="/" class="nav__link">Главная</routerLink>
          </li>
          <li>
            <routerLink to="/movie" class="nav__link">Фильмы</routerLink>
          </li>
          <li>
            <routerLink to="/tv" class="nav__link">Сериалы</routerLink>
          </li>
          <li>
            <routerLink to="/search" class="nav__link">
              <img src="../../assets/images/search.svg" alt="" />
            </routerLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";
const burger = ref(false);
</script>
