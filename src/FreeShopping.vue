<template>
  <div class="field">
    <div class="fld">
      <div>
        <p>БЕСПЛАТНАЯ ДОСТАВКА + СКИДКА 10%</p>
      </div>
      <div class="btn">
        <a class="button">Получить промокод</a>
      </div>
    </div>
    <div class="fristOrder">
      <p>первого заказа</p>
      <p>на заказы кулинарии</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.field {
  display: flex;
  flex-direction: column;
  background: radial-gradient(
    68.58% 1403.4% at 73.62% -94.51%,
    #ff1f00 0%,
    #ff7715 100%
  );
  border-radius: 44px;
  width: 1291px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
  .fld {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 20px;
    p {
      font-family: "Nunito-Medium";
      font-style: normal;
      font-weight: 700;
      font-size: 38px;
      line-height: 52px;
      color: #ffffff;
    }
    .button {
      position: relative;
      left: 80px;
      padding: 15px;
      border: 2px solid white;
      border-radius: 30px;
      font-family: "Nunito-Medium";
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 30px;
      color: #ffffff;
      cursor: pointer;
    }
  }
  .fristOrder {
    display: flex;
    p {
      font-family: "Nunito-Medium";
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 30px;
      color: #ffffff;
    }
    p:nth-child(1) {
      position: relative;
      left: 130px;
      bottom: 30px;
    }
    p:nth-child(2) {
      position: relative;
      left: 500px;
      bottom: 30px;
    }
  }
}
</style>
