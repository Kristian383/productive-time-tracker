<template>
  <base-card>
    <div class="add-time-entry-container">
      <h2>New time entry</h2>
      <!-- <font-awesome-icon class="x-icon" icon="plus-circle" /> -->
      <div class="input-group error">
        <label for="project">Project</label>
        <input id="project" v-model="project" type="text" :disabled="true" />
      </div>
      <div class="input-group error">
        <label for="service">Service</label>
        <input id="service" v-model="service" type="text" :disabled="true" />
      </div>
      <div><b>Date</b>: 5-05-2022</div>
      <div class="input-group error">
        <label for="duration">Duration</label>
        <input
          id="duration"
          v-model="duration"
          type="text"
          placeholder="00:00"
        />
        <span class="duration-time-info">= 24h 18min</span>
      </div>
      <label for="note"><b>Note</b></label>
      <!--  -->
      <div class="bottom-section">
        <button class="btn save">Save</button>
        <button class="btn cancel">Cancel</button>
      </div>
    </div>
  </base-card>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const duration = ref();
    return { duration };
  },
};
</script>

<style lang="scss" scoped>
.add-time-entry-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  max-width: 460px;
  margin: 0 auto;

  @include md {
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  h2 {
    text-align: center;
  }

  .x-icon {
    transform: rotate(45deg);
    font-size: 1.5rem;
  }

  .input-group {
    @include input_group;

    .duration-time-info {
      position: absolute;
      bottom: 0.7rem;
      right: 1rem;
    }
  }

  .bottom-section {
    display: flex;
    justify-content: center;
    gap: 1rem;

    .btn {
      @include btn;

      &.save {
        background-color: $purple_button;
        color: #fff;

        &:hover {
          background-color: $purple_button_hover;
        }
      }

      &.cancel {
        background-color: $background_blue;

        &:hover {
          border-color: $purple_button;
        }
      }
    }
  }
}
</style>
