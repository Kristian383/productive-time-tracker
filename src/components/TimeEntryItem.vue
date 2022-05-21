<template>
  <div class="time-entry-container">
    <div class="first-column">
      <img
        class="entry-image"
        src="@/assets/images/buildings.png"
        alt="Project"
      />
      <div class="entry-project-service">
        <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b></p>
        <p style="color: #636688">Open hours</p>
      </div>
    </div>
    <!--  -->
    <div class="entry-notes">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta fugit
      repudiandae esse cupiditate fugiat. Illum architecto rerum natus sed
      facilis!
    </div>
    <!--  -->
    <div class="duration-edit-data">
      <span class="duration">03:00</span>
      <span class="icon-wrapper">
        <font-awesome-icon icon="play"></font-awesome-icon>
      </span>
      <span class="icon-wrapper" @click="toggleCopyPopup">
        <font-awesome-icon icon="ellipsis-h"></font-awesome-icon>
      </span>
      <!--  -->
      <popup-edit :active="popupIsActive"></popup-edit>
    </div>
  </div>
</template>

<script>
import PopupEdit from "./ui/PopupEdit.vue";

import { ref } from "vue";

export default {
  components: { PopupEdit },
  setup() {
    const popupIsActive = ref(false);

    function toggleCopyPopup() {
      popupIsActive.value = !popupIsActive.value;
    }
    return {
      toggleCopyPopup,
      popupIsActive,
    };
  },
};
</script>

<style lang="scss" scoped>
.time-entry-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  font-size: 0.8rem;
  background-color: $background_blue;
  border-bottom: 1px solid $border_color;

  &:first-child {
    border-radius: 6px 6px 0px 0px;
  }

  &:last-child {
    border-radius: 0px 0px 6px 6px;
    border-bottom: none;
  }
  .first-column {
    display: flex;
    gap: 1rem;
    align-items: center;
    color: $text_dark;
    // flex-grow: 1;

    @include md {
      // gap: 3rem;
      max-width: 25rem;
    }

    .entry-image {
      width: 3rem;
      height: 3rem;
      vertical-align: middle;
    }
  }

  .entry-notes {
    // flex-grow: 3;
    display: flex;
  }

  .duration-edit-data {
    // flex-grow: 2;
    display: flex;
    gap: 2.4rem;
    align-items: center;
    justify-content: center;
    position: relative;

    .duration {
      font-size: 1rem;
    }

    .icon-wrapper {
      cursor: pointer;
      padding: 5px 8px;
      border-radius: 4px;
      text-align: center;
      transition: 0.2s all ease-in;
      font-size: 1.2rem;
      color: $text_light;

      &:hover {
        background-color: $background_blue_hover;
      }
    }

    // .popup-edit {
    //   position: absolute;
    //   top: 53px;
    //   right: 0;
    //   background-color: #fff;
    //   display: flex;
    //   border-radius: 4px;
    //   flex-direction: column;
    //   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    //     0 2px 4px -1px rgba(0, 0, 0, 0.06);

    //   span {
    //     cursor: pointer;
    //     display: flex;
    //     gap: 8px;
    //     align-items: center;
    //     padding: 12px;

    //     &:hover {
    //       background-color: $background_blue;
    //     }

    //     &:last-child {
    //       color: $red_text;
    //     }
    //     &:last-child:hover {
    //       background-color: $red_text_hover;
    //     }
    //   }
    // }

    @include md {
      gap: 1rem;
    }
  }

  @include lg {
    flex-direction: row;
  }
}
</style>
