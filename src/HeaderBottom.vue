<template>
  <div>
    <div class="Header">
      <div class="logo">
        <router-link to="/">
          <img src="/img/logo.png" alt="" />
        </router-link>
      </div>
      <div class="catalog">
        <div>
          <div />
          <div />
          <div />
        </div>
        <p>Каталог</p>
        <div class="menuCatalog">
          <ul class="menu">
            <li class="salesfirst">
              Акции
              <ul class="salesOpen">
                <li>Напитки</li>
                <li>Мучное</li>
                <li>Спиртные напитки</li>
                <li>Соки</li>
                <li>Десерт</li>
              </ul>
              <div class="arrowcreate">
                <div class="arrowbottom"></div>
                <div class="arrowtop"></div>
              </div>
            </li>
            <li class="popular">
              Популярные
              <ul class="popularOpen">
                <li>Мясо</li>
                <li>Спиртные напитки</li>
                <li>Морепродукты</li>
                <router-link to="/Catalog/Bread">
                  <li>Выпечка</li>
                </router-link>
                <router-link to="/Catalog/Pizza">
                  <li>Пицца</li>
                </router-link>
                <router-link to="/Catalog/Salad">
                  <li>Салаты</li>
                </router-link>
              </ul>
              <div class="arrowcreate">
                <div class="arrowbottom"></div>
                <div class="arrowtop"></div>
              </div>
            </li>
            <li class="supermarkt">
              Супермаркет
              <ul class="supermarktOpen">
                <li>Вода и напитки</li>
                <li>Молоко и яйца</li>
                <li>Снэки и сухофрукты</li>
                <li>Кофе, чай, сладости</li>
                <li>Макароны и крупы</li>
                <li>Хлеб и выпечка</li>
              </ul>
              <div class="arrowcreate">
                <div class="arrowbottom"></div>
                <div class="arrowtop"></div>
              </div>
            </li>
            <li class="cooking">
              Кулинария
              <ul class="cookingOpen">
                <Link to="lists/bread">
                  <li>Хлеб и выпечка</li>
                </Link>
                <li>Продукция к чаю</li>
                <li>Снэки</li>
              </ul>
              <div class="arrowcreate">
                <div class="arrowbottom"></div>
                <div class="arrowtop"></div>
              </div>
            </li>
            <li class="freezing">
              Заморозка
              <div class="arrowcreate">
                <div class="arrowbottom"></div>
                <div class="arrowtop"></div>
              </div>
            </li>
            <li class="anthr">
              Другое
              <div class="arrowcreate">
                <div class="arrowbottom"></div>
                <div class="arrowtop"></div>
              </div>
            </li>
            <li>
              Продукция от «Ильинского
              <div class="arrowcreate">
                <div class="arrowbottom"></div>
                <div class="arrowtop"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="input">
        <input placeholder="Начать поиск..." />
      </div>
      <div class="address">
        <div class="label">
          <img src="/img/label.png" alt="" />
          <p>МСК</p>
        </div>
        <div class="delivery">
          <p>Выберите способ получения</p>
          <p>Доставка или самовывоз</p>
        </div>
      </div>
      <div class="favorites">
        <img src="/img/favorite.svg" alt="" />
      </div>
      <div class="user">
        <img src="/img/user.svg" alt="" />
      </div>
      <div class="basket">
        <img src="/img/basket.svg" alt="" />
        <p>Корзина</p>
      </div>
    </div>
    <div class="HeaderСontinued">
      <div class="Categories">
        <div>
          <img src="/img/apple.svg" alt="" />
          <p>Супермаркет</p>
        </div>
        <div>
          <img src="/img/pizza.svg" alt="" />
          <p>Кулинария</p>
        </div>
        <div>
          <img src="/img/fresh.svg" alt="" />
          <p>Заморозка</p>
        </div>
        <div>
          <img src="/img/another.svg" alt="" />
          <p>Другое</p>
        </div>
        <div>
          <img src="/img/sales.svg" alt="" />
          <p>Акции</p>
        </div>
        <div>
          <img src="/img/stores.svg" alt="" />
          <p>Магазины</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.Header {
  z-index: 20;
  position: relative;
  display: flex;
  justify-content: space-between;
  top: 100px;
  margin: 0 auto;
  width: 1291px;
}
.catalog {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 132px;
  height: 48px;
  background: #ff0000;
  p {
    color: #fff;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
    background: #ff0000;
    border: #ff0000;
    margin-left: 8px;
  }
  > div {
    cursor: pointer;
    > div {
      margin-bottom: 2px;
      width: 18px;
      height: 2px;
      background-color: #ffffff;
    }
  }
}
.menuCatalog {
  display: none;
  position: absolute;
  top: 50px;
  left: -197px;
  color: #fff;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 688px;
  transition-duration: 0.5s ease;
  .menu {
    width: 308px;
    border-right: 3px solid #e0e0e0;
    padding-right: 10px;

    li {
      margin: 10px;
      display: flex;
      justify-content: space-between;
      font-style: normal;
      font-weight: 100;
      font-size: 20px;
      line-height: 27px;
      color: #0a0a0a;
      list-style: none;
      position: relative;
      left: -15px;
      right: 25px;
      img {
        width: 7px;
        height: 11px;
        position: relative;
        top: 7px;
      }
    }
  }
}
.arrowcreate {
  .arrowbottom {
    transform: rotate(135deg);
    background: #000000;
    width: 2px;
    height: 9px;
    position: relative;
    top: 2px;
  }
  .arrowtop {
    transform: rotate(45deg);
    background: #000000;
    width: 2px;
    height: 9px;
    position: relative;
    bottom: 2px;
  }
}
.supermarktOpen {
  display: none;
  overflow: auto;
}

.menu li:hover .supermarktOpen {
  display: block;
  position: absolute;
  left: 86%;
  top: -300%;
  padding-left: 110px;
  height: 250px;
  width: 200px;
  padding-right: 80px;
}
.input > input {
  background: #ffffff;
  background-image: url("../public/img/search.png");
  background-position: 95% 45%;
  background-repeat: no-repeat;
  border: 1px solid #e1e1e1;
  border-radius: 16px;
  width: 317px;
  height: 48px;
  padding-left: 15px;
}
.address {
  display: flex;
  width: 295px;
  .label {
    position: relative;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    width: 65px;
    height: 48px;
    background: rgba(255, 169, 0, 0.7);
    border-radius: 16px 0px 0px 16px;
    img {
      position: absolute;
      left: 25px;
      top: 9px;
    }
    p {
      position: absolute;
      left: 14px;
      top: 8px;
    }
  }
}
.COOKING {
  width: 1291px;
  position: relative;
  top: 120px;
  left: 4px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 70px;
  div {
    margin-bottom: 15px;
    width: 304px;
    height: 304px;
    background: #fff8eb;
    border: 1px solid #ffe7b9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 58px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
  }
  p {
    position: relative;
    z-index: 22;
    left: 100px;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 41px;
    color: #774631;
  }

  .p2__1 {
    position: relative;
    top: 100px;
    left: -25px;
  }
  .p2__2 {
    position: relative;
    top: 90px;
    left: -25px;
  }
  .p2__3 {
    position: relative;
    top: 90px;
    left: -25px;
  }
  .p2__4 {
    position: relative;
    top: 90px;
    left: -45px;
  }
  .p2__5 {
    position: relative;
    top: 90px;
    left: -32px;
  }
  .p2__6 {
    position: relative;
    top: 90px;
    left: -12px;
  }
  .p2__7 {
    position: relative;
    top: 90px;
    left: -8px;
  }
  .p2__8 {
    position: relative;
    top: 55px;
    left: -18px;
  }
}
.delivery {
  width: 230px;
  height: 48px;
  padding-left: 15px;
  background: #ffa900;
  border-radius: 0px 16px 16px 0px;
  p:first-child {
    display: block;
    position: relative;
    top: -6px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
  }
  p:last-child {
    display: block;
    position: relative;
    top: -27px;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
  }
}
.basket {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 48px;
  background: #ff0000;
  border-radius: 16px;
  img {
    width: 26px;
    height: 22px;
    margin-right: 10px;
  }
  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
  }
}
.catalog:hover {
  transition-duration: 0.1s;
  transform: scale(1.06);
  cursor: pointer;
  .menuCatalog {
    position: absolute;
    top: 48px;
    display: block;
    li:hover {
      color: red;
      .arrowbottom {
        background-color: red;
      }
      .arrowtop {
        background-color: red;
      }
    }
  }
}
.menu li:hover .salesOpen {
  display: block;
}

.menu .salesOpen {
  display: none;
  position: absolute;
  top: -40%;
  left: 100%;
  padding-left: 70px;
  li {
    width: 300px;
  }
}

.popularOpen {
  display: none;
}

.menu li:hover .popularOpen {
  display: block;
  position: absolute;
  left: 86%;
  top: -170%;
  padding-left: 110px;
  li {
    width: 300px;
  }
}

.supermarktOpen {
  display: none;
  overflow: hidden;
}

.menu li:hover .supermarktOpen {
  display: block;
  position: absolute;
  left: 86%;
  top: -300%;
  padding-left: 110px;
  height: 250px;
  width: 200px;
  padding-right: 80px;
  li {
    width: 300px;
  }
}
.cookingOpen {
  display: none;
}
li:hover .cookingOpen {
  display: block;
  position: absolute;
  left: 85%;
  top: -440%;
  padding-left: 110px;
  height: 250px;
  width: 200px;
  padding-right: 80px;
  li {
    width: 300px;
  }
}
.HeaderСontinued {
  position: relative;
  display: flex;
  justify-content: space-between;
  top: 100px;
  margin: 0 auto;
  width: 1291px;
  margin-bottom: 50px;
}
.Categories {
  display: flex;
  width: 700px;
  position: relative;
  top: 18px;
  > div {
    padding: 0 15px;
    margin-right: 14px;
    display: flex;
    background-color: #fff8eb;
    border: 1px solid rgba(255, 169, 0, 0.45);
    border-radius: 16px;
  }
}
</style>
