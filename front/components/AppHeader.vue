<template>
  <div id="nav">
    <nuxt-link to="/" class="linkheader"><img class="icone_logo" src="/components/assets/img/TechPaws1.png"/></nuxt-link>
    <nuxt-link to="/" class="linkheader"><h4>Home</h4></nuxt-link>
    <nuxt-link to="/sobre" class="linkheader"><h4>Sobre</h4></nuxt-link>
    <nuxt-link to="/adocoes" class="linkheader"><h4>Adoções</h4></nuxt-link>
    <nuxt-link to="/doacoes" class="linkheader"><h4>Doações</h4></nuxt-link>

    <nuxt-link :to="isLoggedIn ? '/perfil' : '/login'" class="linkheader">
      <img class="icone_user" src="/components/assets/img/perfil.svg" />
    </nuxt-link>

    <button class="openbtn linkdesktop btnsidebar" @click="toggleMenu">
      <span v-if="!menuOpen">&#9776;</span>
      <span v-if="menuOpen">&times;</span>
    </button>

    <div id="menu" :class="{ open: menuOpen }">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/sobre">Sobre</nuxt-link>
      <nuxt-link to="/adocoes">Adoções</nuxt-link>
      <nuxt-link to="/doacoes">Doações</nuxt-link>

      <nuxt-link :to="isLoggedIn ? '/perfil' : '/login'">Perfil</nuxt-link>
    </div>
  </div>
</template>

<script>
import session from '../mixin/session.js';

export default {
  data() {
    return {
      menuOpen: false,
      isLoggedIn: false,
    };
  },
  mounted() {
    this.checkAuth();
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;

      const menu = document.getElementById("menu");
      const openbtn = document.querySelector(".openbtn");

      if (this.menuOpen) {
        menu.style.width = "150px";
        openbtn.classList.add("open");
        openbtn.innerHTML = "&times;";
      } else {
        menu.style.width = "0";
        openbtn.classList.remove("open");
        openbtn.innerHTML = "&#9776;";
      }
    },
    checkAuth() {
      const userId = session.methods.get_session('id');
      this.isLoggedIn = !!userId;

      if (!this.isLoggedIn) {
        //this.$router.push('/login');
      }
    },
  },
}
</script>
