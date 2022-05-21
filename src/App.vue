<template>
  <the-header></the-header>
  <the-sidebar></the-sidebar>

  <router-view />
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheSidebar from "@/components/layout/TheSidebar.vue";

export default {
  components: {
    TheHeader,
    TheSidebar,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html {
  scroll-behavior: smooth;
}
</style>
