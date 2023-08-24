<template>
  <div id="map" class="shadow" style="width: 100%; height: 500px"></div>
</template>

<script>
import "./yandex-maps";

function init() {
  let myMap = new ymaps.Map("map", {
    center: [48.743818, 44.520393],
    zoom: 16,
  });
}

export default {
  data() {
    return {};
  },
  mounted() {
    ymaps.ready(init);
  },
};
</script>

<style scoped></style>
