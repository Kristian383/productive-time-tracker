<template>
  <div style="position: relative">
    <slot></slot>
    <transition name="bounce">
      <div v-if="active" class="popup-edit">
        <router-link :to="'?edit=' + id">
          <font-awesome-icon icon="edit"></font-awesome-icon>
          Edit</router-link
        >
        <span @click="handleDeleteEntry">
          <font-awesome-icon icon="edit"></font-awesome-icon>
          Delete
        </span>
      </div>
    </transition>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: ["active", "id"],
  setup(props) {
    const store = useStore();

    function handleDeleteEntry() {
      store.dispatch("time/deleteTimeEntry", props.id);
    }

    return {
      handleDeleteEntry,
    };
  },
};
</script>

<style lang="scss" scoped>
.popup-edit {
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #fff;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 22;

  span,
  a {
    cursor: pointer;
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 14px;
    text-decoration: none;
    color: inherit;
  }

  a {
    &:hover {
      background-color: $background_blue;
    }
  }
  span {
    &:last-child {
      color: $red_text;
    }
    &:last-child:hover {
      background-color: $red_text_hover;
    }
  }
}
</style>
