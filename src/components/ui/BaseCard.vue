<template>
  <div
    class="home-section"
    :class="{ expand_home_section: sidebarIsActive && isDesktop }"
  >
    <slot></slot>
    <!-- <scroll-up :class="{ show: showBackToTop }"></scroll-up> -->
  </div>
</template>

<script>
// import ScrollUp from "./ScrollUp.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    // ScrollUp,
  },
  setup() {
    const showBackToTop = ref(false);
    // const title = ref("");
    const store = useStore();

    const sidebarIsActive = computed(() => {
      return store.getters.sidebarIsActive;
    });

    const isDesktop = computed(() => {
      return !store.getters.isMobile;
    });

    return {
      showBackToTop,
      //   title,
      sidebarIsActive,
      isDesktop,
    };
  },
  //   methods: {
  //     showButtonUp() {
  //       if (window.scrollY > 800) {
  //         this.showBackToTop = true;
  //       } else if (window.scrollY < 800) {
  //         this.showBackToTop = false;
  //       }
  //     },
  //   },
  //   mounted() {
  //     window.addEventListener("scroll", this.showButtonUp);
  //   },
  //   beforeUnmount() {
  //     window.removeEventListener("scroll", this.showButtonUp);
  //   },
};
</script>

<style lang="scss" scoped>
.home-section {
  position: relative;
  background: #fff;
  min-height: 100vh;
  transition: all 0.5s ease;
  padding: 6rem 1.5rem 1rem 1.5rem;
  // overflow-y: auto;

  &.expand_home_section {
    left: 240px;
    width: calc(100% - 240px);
  }

  @include sm {
    padding-top: 1.5rem;
  }
}

// .home-section .home-content {
//   position: relative;
//   background-color: #fff;
//   height: 100%;
//   max-width: 1700px;
//   margin: 0 auto;

//   @include sm {
//     padding: 15px;
//   }
// }

// @media (min-width: 1400px) {
//   .home-section .home-content {
//     padding: 110px 15px 15px 15px;
//   }
// }
</style>
