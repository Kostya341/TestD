<template>
  <div class="SHPandPAY">
    <h1>ДОСТАВКА И ОПЛАТА</h1>
    <div class="services">
      <div>
        <div>
          <div class="delivery_zones">
            <span>Зоны доставки</span>
            <p>
              Доставка осуществляется в районе ЖК «Ильинские Луга» (Харьковськая
              обл., Красногорск, пос. Ильинское-Усово, ул. Заповедная) и ЖК
              «Новая Рига» (Харьковськая обл., Красногорск, д. Глухово, ул.
              Рублевское Предместье)
            </p>
          </div>
        </div>
        <div>
          <div class="time">
            <span>25 минут</span>
            <p>Доставка 25 минут. Принимаем заказы с 7:00 до 23:00</p>
          </div>
        </div>
        <div>
          <div class="price">
            <span>300 грн</span>
            <p>
              Минимальная сумма бесплатной доставки с учетом скидок. Иначе
              стоимость доставке 50 грн
            </p>
          </div>
          <div class="Payment">
            <span>Оплата</span>
            <p>
              При оформлении заказа вы можете выбрать удобный для вас спобос
              рассчета
            </p>
            <p>Изображения продуктов могут отличаться от продуктов в заказе.</p>
          </div>
        </div>
      </div>
      <div class="Delivery_card">
        <span>Карта доставки</span>
        <div class="maps">
          <Map />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./Map.vue";
export default {
  components: {
    Map,
  },
};
</script>

<style lang="scss">
.SHPandPAY {
  width: 1291px;
  margin: 0 auto;
  margin-top: 250px;
  .delivery_zones span {
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #ff0000;
  }
  .delivery_zones p {
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
    width: 586px;
  }
  .time span {
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #ff0000;
  }
  .time p {
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
    width: 586px;
  }
  .price span {
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #ff0000;
  }
  .price p {
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
    width: 586px;
  }
  .Payment span {
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #ff0000;
  }
  .Payment p {
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
    width: 586px;
  }
}

.Delivery_card span {
  margin-left: 125px;
  font-family: "Nunito-Medium";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ff0000;
}

.services {
  display: flex;
}

.maps {
  width: 600px;
  position: relative;
  top: 30px;
  left: 115px;
}
</style>
