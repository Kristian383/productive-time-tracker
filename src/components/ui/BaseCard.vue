<template>
  <div
    class="home-section"
    :class="{ expand_home_section: sidebarIsActive && isDesktop }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const showBackToTop = ref(false);
    const store = useStore();

    const sidebarIsActive = computed(() => {
      return store.getters.sidebarIsActive;
    });

    const isDesktop = computed(() => {
      return !store.getters.isMobile;
    });

    return {
      showBackToTop,
      sidebarIsActive,
      isDesktop,
    };
  },
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
</style>
