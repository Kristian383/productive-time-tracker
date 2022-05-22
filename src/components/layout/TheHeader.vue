<template>
  <nav class="navbar">
    <h2 class="brand-title">
      <span>Time</span>
      <span :style="'font-weight:400'"> tracker</span>
    </h2>
  </nav>
</template>

<script>
import { ref, onBeforeUnmount, nextTick } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const windowWidth = ref(null);
    const store = useStore();

    nextTick(() => {
      window.addEventListener("resize", checkScreen);
      checkScreen();
    });

    function checkScreen() {
      windowWidth.value = window.innerWidth;
      if (windowWidth.value < 480) {
        store.commit("setMobile", true);
        return;
      }
      store.commit("setMobile", false);
      return;
    }

    onBeforeUnmount(() => {
      window.removeEventListener("resize", checkScreen);
    });

    return {};
  },
};
</script>
<style lang="scss" scoped>
.navbar {
  display: none;
  position: relative;

  @include sm {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: flex-end;

    background-color: $background_blue;
    color: $font_black;
    padding: 1rem;
  }

  @include md {
  }
}
</style>
