<template>
  <the-header></the-header>
  <the-sidebar></the-sidebar>

  <router-view />
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheSidebar from "@/components/layout/TheSidebar.vue";
import { useStore } from "vuex";
import { onMounted } from "vue";

export default {
  components: {
    TheHeader,
    TheSidebar,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("time/fetchOrganisationMemberships").then((res) => {
        if (res) {
          store.dispatch("time/fetchTimeEntries");
        }
      });
    });
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

// #app {
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
// }
</style>
