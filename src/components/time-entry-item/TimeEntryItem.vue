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
        <p style="color: #636688">{{ entry.attributes.service_name }}</p>
      </div>
    </div>
    <!--  -->
    <div class="entry-notes">
      <div v-html="entry.attributes.note"></div>
    </div>
    <!--  -->
    <div class="duration-edit-data">
      <span class="duration">03:00</span>
      <span class="icon-wrapper">
        <font-awesome-icon icon="play"></font-awesome-icon>
      </span>
      <popup-edit :active="popupIsActive" :id="entry.id">
        <span class="icon-wrapper" @click="toggleCopyPopup">
          <font-awesome-icon icon="ellipsis-h"></font-awesome-icon>
        </span>
      </popup-edit>
    </div>
  </div>
</template>

<script>
import PopupEdit from "./PopupEdit.vue";

import { ref } from "vue";

export default {
  components: { PopupEdit },
  props: ["entry"],
  setup(props) {
    const popupIsActive = ref(false);
    const timerStarted = ref(props.entry.attributes.timer_started_at);
    // time,timer_started_at,timer_stopped_at
    setTimeout(() => {
      // console.log(props.entry.attributes);
    }, 2000);

    function toggleCopyPopup() {
      popupIsActive.value = !popupIsActive.value;
    }

    return {
      toggleCopyPopup,
      popupIsActive,
      timerStarted,
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
    align-items: flex-start;
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
    padding-left: 1rem;
  }

  .duration-edit-data {
    // flex-grow: 2;
    display: flex;
    align-items: center;

    justify-content: center;
    position: relative;
    gap: 1rem;

    @include md {
      gap: 2.4rem;
    }

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

    @include md {
      gap: 1rem;
      // justify-content: flex-end;
      margin-left: auto;
    }
  }

  @include lg {
    flex-direction: row;
  }
}
</style>
