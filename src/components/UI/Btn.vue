<template>
  <router-link to="/" class="btn">
    <img src="../../assets/images/bars.svg" alt="" />
    Подробнее
  </router-link>
</template>
<script setup></script>
<style lang="scss">
@import "../../assets/sass/media.scss";
.btn {
  width: 180px;
  height: 50px;
  border-radius: 10px;
  background: #149a03;
  width: 180px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  @include media(800){
    width: 160px;
    height: 45px;
    font-size: 18px;
  }
  @include media(600){
    width: 140px;
    height: 40px;
    font-size: 16px;
    border-radius: 8px;
    img{
      width: 16px;
    }
  }
  @include media(450){
    width: 110px;
    height: 30px;
    font-size: 14px;
    gap: 8px;
    border-radius: 5px;
    img{
      width: 12px;
    }
  }
}
</style>
