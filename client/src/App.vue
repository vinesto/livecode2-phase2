<template>
  <div id="app">
    <div id="nav">
    <navbar v-on:check-token="isLogin"/>
    </div>
    <router-view v-bind:tokenfromapp="tokenApp"/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar
  },
  data: function() {
    return {
      tokenApp: false
    };
  },
  methods: {
    isLogin(value) {
      this.tokenApp = value;
    }
  },
  created() {
    let checkToken = localStorage.getItem("token");
    if (checkToken) {
      this.token = true;
    } else {
      this.token = false;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
