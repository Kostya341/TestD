<template>
  <div class="doubleBlock">
    <div class="leftBlock_one">
      <img src="item.image" />
    </div>
    <div class="rightBlock_one" v-for="item in item">
      <div>{{ item.name }}</div>
      <div class="{styles.toBasket}">
        <div>{{ item.price }}</div>
        <button>В корзину</button>
        <img
          :src="{
            favoritedActive: '../img/favoritedActive.png',
            favorited: '../img/favorited.png',
          }"
          v-on:click="
            {
              click;
            }
          "
          width="50"
          height="50"
        />
      </div>
      <div>{{ item.descr }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: object,
  },
};
</script>

<style lang="scss"></style>
