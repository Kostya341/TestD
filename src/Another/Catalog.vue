<template>
  <div class="container" v-on:click="changeTwo">
    <div class="title">
      <h1>Хлеб и выпечка</h1>
      <div class="categorySearch">
        <div
          v-on:сlick="event.stopPropagation()"
          v-on:click:="change"
          v-on:mouseout="out"
          class="categorypopular"
        >
          <a>
            {{ selected }}
            <div class="arrowcreate">
              <div class="arrowbottom"></div>
              <div class="arrowtop"></div>
            </div>
          </a>
        </div>
        <div class="" :class="{ categories: one, stels: stels }">
          <a v-on:click="select">По популярности</a>
          <a v-on:click="select">По возрастанию цены</a>
          <a v-on:click="select">По уменьшению цены</a>
          <a v-on:click="select">Сначала обсуждаемые</a>
          <a v-on:click="select">Сначала с лучшей оценкой</a>
        </div>
      </div>
    </div>
    <div class="mainList">
      <div class="titleBlock">
        <div class="Peculiarities">
          <h3>Ососбенности</h3>
          <div>
            <input
              type="radio"
              id="yes"
              v-on:click="radioOne"
              class="yes"
              v-bind:checked="powerOne"
              v-on:change="onChange"
            />
            Со скидкой
          </div>
          <div>
            <input
              type="radio"
              id="yes"
              v-on:click="radioTwo"
              class="yes"
              v-bind:checked="powerTwo"
              v-on:change="onChange"
            />
            Доставка сегодня
          </div>
          <div>
            <input
              type="radio"
              class="yes"
              v-on:click="radioThree"
              v-bind:checked="powerThree"
              v-on:change="onChange"
            />
            Продукция от «Ильинского»
          </div>
        </div>
        <div class="links">
          <ul>
            <router-link to="Lists" class="link">
              <li>Хлеб</li>
            </router-link>
            <router-link to="Lists" class="link">
              <li>Лаваш и лепешки</li>
            </router-link>
            <router-link to="Lists" class="link">
              <li>Выпечка</li>
            </router-link>
            <router-link to="Lists" class="link">
              <li>Баранки и сухарики</li>
            </router-link>
            <router-link to="Lists" class="link">
              <li>Хлебцы</li>
            </router-link>
            <router-link to="Lists" class="link">
              <li>Вегетарианцам</li>
            </router-link>
            <router-link to="Lists" class="link">
              <li>Безглютеновая продукция</li>
            </router-link>
            <router-link to="Lists" class="link">
              <li>Лаваш и лепешки</li>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="centerBlock">
        <div class="leftBlock">
          <h3>Каталог</h3>
          <ul>
            <li>
              <p>Кулинария</p>
            </li>
            <router-link to="/Catalog/Bread" class="link">
              <li>Выпечка</li>
            </router-link>
            <router-link to="pizza" class="link">
              <li>Пиццы</li>
            </router-link>
            <router-link to="salad" class="link">
              <li>Салаты</li>
            </router-link>
            <li>
              <a>Супы</a>
            </li>
            <li>
              <a>Горячие блюда</a>
            </li>
            <li>
              <a>Десерты</a>
            </li>
          </ul>
          <ul>
            <li>
              <p>Супермаркет</p>
            </li>
            <li>
              <a>Вода и напитки</a>
            </li>
            <li>
              <a>Молоко, масло и яйца</a>
            </li>
            <li>
              <a>Снэки и сухофрукты</a>
            </li>
            <li>
              <a>Кофе, чай и сладости</a>
            </li>
            <li>
              <a>Макароны и крупы</a>
            </li>
            <li>
              <a>Хлеб и выпечка</a>
            </li>
            <li>
              <a>Десерты</a>
            </li>
            <li>
              <a>Консервы и соления</a>
            </li>
          </ul>
          <ul>
            <li>
              <p>Заморозка</p>
            </li>
            <li>
              <a>Пельмени, вареники и равиоли</a>
            </li>
            <li>
              <a>Хинкали и манты</a>
            </li>
            <li>
              <a>Полуфабрикаты</a>
            </li>
            <li>
              <a>Замороженные овощи</a>
            </li>
          </ul>
          <ul>
            <li>
              <p>Заморозка</p>
            </li>
            <li>
              <a>Красота и гигиена</a>
            </li>
            <li>
              <a>Стирка и уборка</a>
            </li>
            <li>
              <a>Полезные мелочи</a>
            </li>
          </ul>
        </div>
        <div class="rightBlock">
          <router-view :selected="selected" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "По популярности",
      one: false,
      stels: true,
      powerOne: false,
      powerTwo: false,
      powerThree: false,
      categories: "",
    };
  },
  methods: {
    radioOne() {
      this.powerOne = !this.powerOne;
    },
    radioTwo() {
      this.powerTwo = !this.powerTwo;
    },
    radioThree() {
      this.powerThree = !this.powerThree;
    },
    change() {
      this.one = !this.one;
      this.stels = !this.stels;
    },
    changeTwo() {
      this.one = false;
      this.stels = true;
    },
    out() {
      this.one = !this.one;
      this.stels = !this.stels;
    },
    select(event) {
      this.selected = event.target.innerHTML;
    },

    onChange() {
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.link {
  font-size: 20px;
  font-weight: 700;
}
a {
  font-size: 16px;
  font-weight: 300;
}
.link {
  text-decoration: none;
}
.stels {
  display: none;
}
.categorypopular {
  position: relative;
  width: 261px;
  padding: 5px;
  background: #fff8eb;
  border: 1px solid rgba(255, 169, 0, 0.45);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    left: -10px;
  }
  .arrowcreate {
    position: relative;
    left: 20px;
  }
}

.categorySearch {
  .categories {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 56px;
    margin-left: 35px;
    padding-top: 37px;
    cursor: pointer;
    width: 200px;

    a {
      top: -35px;
      z-index: 12;
      background: #fff8eb;
      border: 1.5px solid rgba(255, 169, 0, 0.45);
      border-radius: 8px;
      width: 200px;
      text-align: center;
      position: relative;
      left: -7px;
      margin-bottom: 1px;
    }
    a:hover {
      color: red;
    }
  }
}

.mainList {
  position: relative;
  width: 1291px;
  margin: 0 auto;
  font-family: "Nunito-Medium";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  div {
    margin-bottom: 15px;
  }
  color: #000000;
  input:checked {
    background: #ff1f00;
  }
}

.yes {
  border: 2px solid white;
  box-shadow: 0 0 0 1px rgba(255, 169, 0, 0.35);
  appearance: none;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background: rgba(255, 169, 0, 0.35);
  transition: all ease-in 0.2s;
}

.yes:checked {
  background-color: #232323;
}

.centerBlock {
  display: flex;
}
.leftBlock {
  ul {
    li {
      list-style: none;
      font-family: "Nunito-Medium";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
      color: #000000;
    }
    li:active {
      color: #f00;
    }
    li:visited {
      color: #f00;
    }
  }
  p {
    position: relative;
    right: 20px;
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
  }
}
.centerBlock {
  display: flex;
}
.links {
  display: relative;
  margin-top: 30px;
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    background: #fff8eb;
    border: 1px solid rgba(255, 169, 0, 0.45);
    border-radius: 16px;
    list-style: none;
    padding: 5px 25px;
    margin-right: 10px;
    margin-bottom: 12px;
    color: black;
  }
}

.mainList {
  position: relative;
  width: 1291px;
  margin: 0 auto;
  font-family: "Nunito-Medium";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  div {
    margin-bottom: 15px;
  }
  color: #000000;
  input:checked {
    background: #ff1f00;
  }
}
.Peculiarities {
  width: 525px;
}
.titleBlock {
  display: flex;
}
.container {
  width: 1291px;
  margin: 0 auto;
  position: relative;
  margin-top: 200px;
  font-family: "Nunito-Medium";
}
.categorySearch .stels {
  display: none;
}
</style>
