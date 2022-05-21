<template>
  <transition name="bounce">
    <div v-if="active" class="popup-edit">
      <span>
        <font-awesome-icon icon="edit"></font-awesome-icon>
        Edit
      </span>
      <span>
        <font-awesome-icon icon="edit"></font-awesome-icon>
        Delete
      </span>
    </div>
  </transition>
</template>

<script>
// import { ref } from "vue";
export default {
  props: ["active"],
  setup() {
    // const popupIsActive = ref(false);

    return {
      //   popupIsActive,
    };
  },
};
</script>

<style lang="scss" scoped>
.popup-edit {
  position: absolute;
  top: 53px;
  right: 0;
  background-color: #fff;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;

  span {
    cursor: pointer;
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 12px;

    &:hover {
      background-color: $background_blue;
    }

    &:last-child {
      color: $red_text;
    }
    &:last-child:hover {
      background-color: $red_text_hover;
    }
  }
}
</style>
