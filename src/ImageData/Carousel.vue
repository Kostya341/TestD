<template>
  <div class="DiscountGroup">
    <div class="title">
      <div class="lookSale">
        <h2>Скидки</h2>
        <a>Смотреть всё</a>
      </div>
      <div class="switch">
        <img
          v-on:click="arrowLeft"
          class="switchLeft"
          src="/img/arrowLeft.png"
        />
        <img
          v-on:click="arrowRight"
          class="switchRight"
          src="/img/arrowRight.png"
        />
      </div>
    </div>
    <div class="Group">
      <div class="DiscountGroupBlock" v-for="(item, index) in ItemDiscount">
        <div class="DiscountList" :key="index">
          <img class="imageDiscount" :src="item.image" />
          <div class="discriptionDiscount">{{ item.discription }}</div>
          <div class="nameDicrtiption">{{ item.nameDicrtiption }}</div>
          <div class="nameDiscount">{{ item.name }}</div>
          <div class="infoDiscount">
            <div class="priceDiscount">{{ item.price }}</div>
            <div class="basketDiscount">{{ item.basket }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const ItemDiscount = [
  {
    id: 1,
    image: "/img/muesli.svg",
    discription: "В наличии 2 шт",
    price: "149 руб.",
    name: "Гранола Мюсли Bionova ягодные запечённые хрустящие, 400г",
    favorite: "/img/heart-active.svg",
    basket: "в корзину",
  },
  {
    id: 2,
    image: "/img/juice.svg",
    discription: "В наличии 33 шт",
    price: "99 руб.",
    name: `Сок Ideas`,
    nameDicrtiption: "тыквенно-апельсиновый, 1л",
    favorite: "/img/heart-noActive.svg",
    basket: "в корзину",
  },
  {
    id: 3,
    image: "/img/muesli.svg",
    discription: "В наличии 12 шт",
    price: "149 руб.",
    name: "Гранола Мюсли Bionova ягодные запечённые хрустящие, 400г",
    favorite: "/img/heart-active.svg",
    basket: "в корзину",
  },
  {
    id: 4,
    image: "/img/juice.svg",
    discription: "Появится завтра",
    price: "99 руб.",
    name: "Сок Ideas",
    nameDicrtiption: "тыквенно-апельсиновый, 1л",
    favorite: "/img/heart-noActive.svg",
    basket: "в корзину",
  },
];
export default {
  data() {
    return {
      ItemDiscount: ItemDiscount,
    };
  },
  methods: {
    arrowLeft() {
      const newArr = [...this.ItemDiscount];
      const last = newArr.shift();
      newArr.push(last);
      this.ItemDiscount = newArr;
    },
    arrowRight() {
      const newArr = [...this.ItemDiscount];
      const last = newArr.pop();
      newArr.unshift(last);
      this.ItemDiscount = newArr;
    },
  },
};
</script>

<style lang="scss">
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.Group {
  display: flex;
  justify-content: space-between;
}
.lookSale {
  display: flex;
  align-items: center;
  a {
    margin-left: 25px;
    border: 2px solid rgba(255, 169, 0, 0.7);
    border-radius: 12px;
    width: 150px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff8eb;
  }
}
.DiscountGroup {
  margin: 0 auto;
  width: 1291px;
  position: relative;
  top: 200px;
}

.DiscountList {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 6%;
  padding-left: 11px;
  padding-right: 25px;
  padding-bottom: 5px;
  width: 270px;
  height: 350px;
  text-align: left;
  margin-bottom: 200px;
}

.imageDiscount {
  height: 200px;
}

.switchLeft {
  width: 30px;
  height: 30px;
}

.switchRight {
  width: 30px;
  height: 30px;
}
.discriptionDiscount {
  font-family: "Nunito-Medium";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #434343;
}

.priceDiscount {
  font-family: "Nunito-Medium";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #000000;
}

.infoDiscount {
  display: flex;
  justify-content: space-between;
}

.basketDiscount {
  cursor: pointer;
  width: 110px;
  height: 42px;
  border: 1px solid #ff0000;
  border-radius: 12px;
  color: #ff0000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}
.discriptionDiscount {
  font-family: "Nunito-Medium";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #434343;
}
.nameDiscount {
  font-family: "Nunito-Medium";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #000000;
  margin-bottom: 10px;
}
.nameDicrtiption {
  font-family: "Nunito-Medium";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #000000;
}
</style>
