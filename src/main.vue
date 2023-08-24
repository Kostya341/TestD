<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.container {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #000000;
  margin: 0 auto;
  width: 1291px;
}
.Slider {
  position: relative;
  top: 150px;
}
</style>
