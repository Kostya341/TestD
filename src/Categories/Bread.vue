<template>
  <div class="block">
    <div
      v-for="(item, index) in currentPageSortedList"
      class="item_description"
      :key="index"
    >
      <img class="salad" :src="item.image" height="200" width="305" />
      <div class="double">
        <p class="quantity">{{ item.quantity }}</p>
        <p class="priceLow">{{ item.price }} {{ item.currency }}</p>
      </div>
      <p class="name" v-on:click="boolvalue">
        {{ item.name }}
      </p>
      <p class="price">{{ item.price }} {{ item.currency }}</p>
    </div>

    <div class="flipping">
      <button class="btn_primary_Prev" v-on:click="prevPage">
        {{ "<" }}
      </button>
      <div class="pagination" v-for="(item, index) in list.length / 6">
        <a v-on:click="countries(index)">{{ index }}</a>
      </div>
      <button class="btn_primary_Next" v-on:click="nextPage">
        {{ ">" }}
      </button>
    </div>

    <div :class="{ detalis_none: detalis_none }">
      <div class="windowPanel" v-on:click="closed"></div>
      <div class="window">
        <img class="closed" src="../img/closed.png" v-on:click="closed" />
        <div v-if="meaning">
          <div class="doubleBlock">
            <div class="leftBlock_one">
              <img :src="meaning.image" />
            </div>
            <div class="rightBlock_one">
              <div>{{ meaning.name }}</div>
              <div class="toBasket">
                <div>{{ meaning.price }} {{ meaning.currency }}</div>
                <div>
                  <div v-if="meaning.value > 0" class="basketQuantity">
                    <button
                      class="button-minus"
                      v-on:click="meaning.addMinus()"
                    >
                      -
                    </button>
                    {{ meaning.value }}
                    <button class="button-plus" v-on:click="meaning.addPlus()">
                      +
                    </button>
                  </div>
                  <div v-else>
                    <button
                      class="buttonDefault"
                      v-on:click="meaning.addPlus()"
                    >
                      В корзину
                    </button>
                  </div>
                </div>
                <div class="favorite">
                  <img
                    v-if="favoriteMap[meaning.id]"
                    src="../img/favoritedActive.png"
                    v-on:click="
                      {
                        toggleFavorite(meaning.id);
                      }
                    "
                    width="50"
                    height="50"
                  />
                  <img
                    v-else="favoriteMap[meaning.id]"
                    src="../img/favorited.png"
                    v-on:click="
                      {
                        toggleFavorite(meaning.id);
                      }
                    "
                    width="50"
                    height="50"
                  />
                </div>
              </div>
              <div>{{ meaning.descr }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bread from "../JSON/Bread.js";

export default {
  props: {
    selected: String,
  },
  data() {
    return {
      list: [...bread],
      b: [...bread],
      bread,
      currentPage: 0,
      boolean: false,
      detalis_none: true,
      info: [],
      favoriteMap: {},
      Arrow: [],
    };
  },

  methods: {
    toggleFavorite(id) {
      const clone = { ...this.favoriteMap };
      if (clone[id]) {
        clone[id] = false;
      } else {
        clone[id] = true;
      }
      this.favoriteMap = clone;
    },
    boolvalue(event) {
      this.detalis_none = this.boolean;
      this.info = event.target.innerHTML;
    },
    closed() {
      this.detalis_none = !this.boolean;
    },
    countries(item) {
      this.currentPage = item;
    },
    nextPage(currentPage) {
      if (this.currentPage < bread.length / 6 - 1)
        this.currentPage = this.currentPage + 1;
    },
    prevPage(currentPage) {
      if (this.currentPage > 0) this.currentPage = this.currentPage - 1;
    },
    changeMinus(a, b) {
      if (Number(a.price) > Number(b.price)) return 1;
      if (Number(a.price) == Number(b.price)) return 0;
      if (Number(a.price) < Number(b.price)) return -1;
    },

    changePlus(a, b) {
      if (Number(a.price) > Number(b.price)) return -1;
      if (Number(a.price) == Number(b.price)) return 0;
      if (Number(a.price) < Number(b.price)) return 1;
    },
    changePopular(a, b) {
      if (Number(a.price) > Number(b.price)) return 1;
      if (Number(a.price) == Number(b.price)) return 0;
      if (Number(a.price) < Number(b.price)) return -1;
    },
    changeDiscussed(a, b) {
      if (Number(a.price) > Number(b.price)) return -1;
      if (Number(a.price) == Number(b.price)) return 0;
      if (Number(a.price) < Number(b.price)) return 1;
    },
    changeBest(a, b) {
      if (Number(a.price) > Number(b.price)) return -1;
      if (Number(a.price) == Number(b.price)) return 1;
      if (Number(a.price) < Number(b.price)) return 0;
    },
  },
  computed: {
    sortedList() {
      const sort = {
        "По популярности": "changePopular",
        "По возрастанию цены": "changePlus",
        "По уменьшению цены": "changeMinus",
        "Сначала обсуждаемые": "changeDiscussed",
        "Сначала с лучшей оценкой": "changeBest",
      }[this.selected];
      // лишний slice здесь для того чтобы клонировать массив
      // т.к. sort мутирует исходный
      return sort ? this.list.slice().sort(this[sort]) : this.list;
    },
    currentPageSortedList() {
      const perPage = 6;
      const position = this.currentPage * perPage;
      return this.sortedList.slice(position, position + perPage);
    },
    meaning() {
      return this.currentPageSortedList.find((item) => item.name == this.info);
    },
  },
};
</script>

<style lang="scss" scoped>
.favorite {
  position: relative;
  bottom: 4px;
}
.doubleBlock {
  display: flex;
  position: relative;
  top: 40px;
  .leftBlock_one {
    margin-right: 150px;
    margin-left: 15px;
    img {
      border-radius: 45px;
    }
  }
  .rightBlock_one {
    width: 600px;

    .toBasket {
      display: flex;
      margin-bottom: 20px;
      margin-top: 20px;
      img {
        cursor: pointer;
      }
    }
    .buttonDefault {
      cursor: pointer;
      width: 146px;
      height: 42px;
      background: #ff0000;
      border: 1px solid #ff0000;
      border-radius: 60px;
      margin-right: 25px;
      margin-left: 35px;
      color: #ffffff;
    }
    .basketQuantity {
      width: 146px;
      height: 42px;
      background: #ffe7b9;
      border: 1px solid #ffe7b9;
      border-radius: 60px;
      margin-right: 25px;
      margin-left: 35px;
      color: #ffffff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .button-minus {
        cursor: pointer;
        background: #ffe7b9;
        border: 1px solid #ffe7b9;
        color: #ffa900;
        width: 29px;
        height: 29px;
        border-radius: 25px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .button-plus {
        cursor: pointer;
        background: #ffa900;
        border: 1px solid #ffa900;
        color: white;
        width: 29px;
        height: 29px;
        border-radius: 25px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

.detalis_none {
  display: none;
}
.windowPanel {
  z-index: 25;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.window {
  z-index: 26;
  border-radius: 15px;
  position: fixed;
  top: 250px;
  left: 450px;
  width: 1350px;
  height: 600px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  .closed {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
}
.block {
  position: relative;
  left: 100px;
  display: grid;
  grid-template-columns: 350px 350px 350px;
}
.item_description {
  height: 406px;
  width: 304px;
  border: 1px solid #dadada;
  border-radius: 20px;
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 10px;
  .double {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }
  .quantity {
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #434343;
    margin-bottom: 45px;
  }
  .priceLow {
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    text-align: right;
    color: #434343;
  }
  .name {
    margin-top: -20px;
    font-family: "Nunito-Medium";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
    &:hover {
      cursor: pointer;
      color: red;
    }
  }
}
.flipping {
  display: flex;
  a {
    list-style: none;
    margin: 0 10px;
    cursor: pointer;
    position: relative;
    top: 5px;
  }
}

.btn_primary_Prev {
  cursor: pointer;
  width: 50px;
  height: 40px;
  border: 0;
  border-radius: 15px;
  background-color: #dcdcdc;
  font-size: 20px;
}

.btn_primary_Next {
  cursor: pointer;
  width: 50px;
  height: 40px;
  border: 0;
  border-radius: 15px;
  background-color: #dcdcdc;
  font-size: 20px;
}
</style>
