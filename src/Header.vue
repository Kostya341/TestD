<template>
  <div>
    <div class="containerTitle">
      <img class="sale" src="/img/header-title-sale.png" alt="" />
      <p class="infoSale">
        ПИТАЙТЕСЬ РАЗНООБРАЗНО И КОПИТЕ <span>СКИДКУ</span> до 10%
      </p>
      <p class="buttonSale">Получить скидку</p>
    </div>
    <HeaderBottom />
  </div>
</template>

<script>
import HeaderBottom from "./HeaderBottom.vue";
export default {
  components: {
    HeaderBottom,
  },
};
</script>

<styles lang="scss">
.containerTitle {
  position: relative;
  max-width: 1950px;
  margin: 0 auto;
  .infoSale {
    position: absolute;
    top: -13px;
    left: 640px;
    width: 355px;
    height: 52px;
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: 120%;
    text-transform: uppercase;
    color: #fff;
    span {
      padding-right: 8px;
      padding-left: 8px;
      border: 1px solid #ffa900;
      background: #ffa900;
      border-radius: 8px;
      color: red;
    }
  }
  .buttonSale {
    cursor: pointer;
    position: absolute;
    width: 189px;
    height: 43px;
    display: flex;
    align-items: center;
    padding-left: 22px;
    top: -5px;
    left: 1030px;
    border: 1px solid #ffffff;
    border-radius: 31px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: #ffffff;
  }
}
</styles>
