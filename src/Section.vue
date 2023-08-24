<template>
  <div class="container">
    <Slider class="Slider" />
  </div>
  <Carousel />
  <MainSection />
  <SHPingANDpay />
  <FreeShopping />
</template>

<script>
import Slider from "./ImageData/Slider.vue";
import HeaderBottom from "./HeaderBottom.vue";
import Carousel from "./ImageData/Carousel.vue";
import MainSection from "./ImageData/MainSection.vue";
import SHPingANDpay from "./ImageData/SHPingANDpay.vue";
import FreeShopping from "./FreeShopping.vue";

export default {
  components: {
    Slider,
    HeaderBottom,
    Carousel,
    MainSection,
    SHPingANDpay,
    FreeShopping,
  },
};
</script>

<style></style>
