<template>
  <div class="view">
    <router-view></router-view>
    <router-link to="/"></router-link>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: "Nunito-Medium";
  src: url("./Nunito-Medium.ttf");
  font-weight: 300;
}

.view {
  font-family: "Nunito-Medium";
}
#app {
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
.view {
  position: relative;
  padding: -10px;
}
</style>
