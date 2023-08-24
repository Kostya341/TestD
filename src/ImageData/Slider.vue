<template>
  <div class="slider">
    <div class="sliderImage" v-for="(item, index) in ImageData">
      <transition name="fade">
        <div class="img-slider" v-if="index === current">
          <img class="img" :src="item.image" />
          <img class="arrowL" src="/img/arrowL.png" v-on:click="back" />
          <img class="arrowR" src="/img/arrowR.png" v-on:click="forward" />
        </div>
      </transition>
    </div>
    <section class="blockImg">
      <img class="cashback" src="../img/cachback.png" />
      <br />
      <img class="getsale" src="../img/getsale.png" />
    </section>
  </div>
</template>

<script>
const ImageData = [
  {
    image: "/img/slider.jpg",
  },
  {
    image: "/img/salesSlider.jpg",
  },
  {
    image: "/img/ball.jpeg",
  },
];
export default {
  data() {
    return {
      ImageData: ImageData,
      current: 0,
    };
  },
  methods: {
    back() {
      if (this.current > 0 && this.current <= this.ImageData.length) {
        this.current--;
      } else {
        this.current = 2;
      }
    },
    forward() {
      if (this.current < this.ImageData.length - 1) {
        this.current++;
      } else {
        this.current = 0;
      }
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.img-slider {
  position: relative;
  margin: 0 auto;
  width: 865px;
  height: 465px;
}
.arrowL {
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 210px;
  width: 50px;
  height: 50px;
  background-color: gainsboro;
  border-radius: 55px;
}
.arrowR {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 210px;
  width: 50px;
  height: 50px;
  background-color: gainsboro;
  border-radius: 55px;
}
.slider {
  position: relative;
  display: grid;
  grid-template-columns: 0 0 0 0;
  width: 1291px;
  height: 465px;
}
.img {
  border-radius: 30px;
  width: 865px;
  height: 465px;
}
.blockImg {
  position: absolute;
  right: 0;
  cursor: pointer;
}
.getsale {
  position: relative;
  top: 25px;
}
</style>
