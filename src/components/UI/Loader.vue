<template>
  <div class="loader">
    <div class="loader__item">
      <div class="loader__circle"></div>
    </div>
  </div>
</template>
<style lang="scss">
.loader {
  width: 100%;
  height: 100vh;
  z-index: 99;
  background: #141414;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  &__item {
    width: 150px;
    height: 150px;
    background-color: #141414;
    border-radius: 50%;
    animation: load 0.5s linear infinite;
    position: relative;
    &::before {
      content: "";
      width: 20px;
      height: 20px;
      background-color: aqua;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 5px rgba(0, 255, 255, 0.5), 0 0 15px rgba(0, 255, 255, 0.5),
        0 0 25px rgba(0, 255, 255, 0.5), 0 0 35px rgba(0, 255, 255, 0.5),
        0 0 45px rgba(0, 255, 255, 0.5);
        z-index: 2;
    }
    &::after {
      content: "";
      position: absolute;
      background-image: linear-gradient(to top, transparent, aqua);
      width: 50%;
      height: 100%;
      border-radius: 75px 0 0 75px;
      background-size: 150px 130px;
      background-repeat: no-repeat;
    }
  }
  &__circle {
    width: 111px;
    height: 111px;
    background-color: #141414;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
    border-radius: 50%;
  }
}
@keyframes load {
    to{
        transform: rotate(360deg);
    }
}
</style>
