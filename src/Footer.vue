<template>
  <div class="footer">
    <div class="linksOne">
      <a>Ильинский онлайн</a>
      <a class="a1">Кулинария</a>
      <a class="a2">Супермаркет</a>
      <a class="a3">Заморозка</a>
      <a class="a4">Другое</a>
    </div>
    <div class="linksTwo">
      <a>Ильинский онлайн</a>
      <a class="a1">Акции</a>
      <a class="a2">Доставка и оплата</a>
      <a class="a3">Программа лояльности</a>
      <a class="a4">Политика конфиденциальности</a>
      <a>Вакансии</a>
    </div>
    <div class="linksThree">
      <a class="number">
        <img src="/img/phone.svg" />
        +38 (000) 49-09-99
      </a>
      <a class="a1">Ежедневно c 09:00 до 21:00</a>

      <div>
        <a class="a2">
          <img src="/img/address.svg" />
          Адреса магазинов
        </a>
      </div>
      <a class="a3">
        <img src="/img/instagram.svg" />
        Следите за нами
      </a>
      <a class="a4">
        <img src="/img/mail.svg" />
        Обратная связь
      </a>
    </div>
    <div class="email">
      <div>
        <a>Подпишитесь на вкусные и полезые новости</a>
      </div>
      <div class="subscribe">
        <input type="email" />
        <a>Подписаться</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 154px;
  background: #d90000;
  padding-top: 20px;
  padding-bottom: -400px;
  min-width: 1920px;
  max-width: 2250px;
  .linksOne a {
    display: block;
    position: relative;
    right: 150px;
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 154%;
    color: #ffffff;
  }
  .linksTwo a {
    cursor: pointer;
    display: block;
    position: relative;
    right: 100px;
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 154%;
    color: #ffffff;
  }
  .linksThree a {
    cursor: pointer;
    display: block;
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 154%;
    color: #ffffff;
  }
  .linksThree .number {
    cursor: pointer;
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: #ffffff;
  }
  .linksThree img {
    position: relative;
    right: 10px;
    top: 2px;
  }
  .linksThree .a1 {
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 15px;
    position: relative;
    left: 20px;
    top: 5px;
  }
}

.email {
  display: flex;
  flex-direction: column;
  position: relative;
  left: 130px;
  a {
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.025em;
    color: #ffffff;
  }
  input {
    width: 300px;
    height: 50px;
    border-radius: 20px;
    border: 1px solid white;
    position: relative;
    top: 20px;
  }
}
.subscribe a {
  position: relative;
  top: 20px;
  left: 20px;
}
</style>
