<template>
  <div class="add-modal-wrapper" id="modal" ref="modal">
    <div class="add-time-entry-container add-modal">
      <!-- <h2>New time entry</h2> -->
      <h2>{{ formTitle }}</h2>
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
      <quill-editor
        ref="quill"
        theme="snow"
        :toolbar="toolBarOptions"
        v-model:content="notes"
        placeholder="Enter a note"
        @update:content="getHTML"
      ></quill-editor>
      <!--  -->
      <p>{{ notesText }}</p>
      <!--  -->
      <div class="bottom-section">
        <button class="btn save">Save</button>
        <button class="btn cancel" @click="closeModal">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const duration = ref("");
    const project = ref("");
    const service = ref("");
    const quill = ref(null);
    const route = useRoute();
    const router = useRouter();
    const formTitle = route.query.edit ? "Edit time entry" : "New time entry";

    const toolBarOptions = [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
    ];

    const notes = ref("");
    const notesText = ref("");

    // watch(notes, (newNotes) => {
    //   console.log(`x is`, newNotes.ops);
    //   notesText.value = newNotes.ops;
    // });

    function getHTML() {
      //   console.log(e);
      console.log(quill.value.getHTML());
    }

    function closeModal() {
      router.push("/time-entries");
    }

    return {
      duration,
      project,
      service,
      toolBarOptions,
      notes,
      notesText,
      getHTML,
      quill,
      formTitle,
      closeModal,
    };
  },
};
</script>

<style lang="scss" scoped>
.add-modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 32;
  overflow-y: scroll;

  -webkit-overflow-scrolling: touch;

  @include sm {
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.3);
    // position: fixed;
    // top: 0;
    // left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    overflow-y: hidden;
  }

  .add-time-entry-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    background-color: #fff;
    position: relative;
    padding: 1rem;

    overflow: hidden;
    height: 100vh;

    @include sm {
      height: auto;
      padding: 2rem;
      max-width: 460px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      border: 1px solid $border_color;
      border-radius: 5px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
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
          color: $purple_button;

          &:hover {
            border-color: $purple_button;
          }
        }
      }
    }
  }
}

/**
 * Modal
 */
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  background-color: #fff;
  width: 600px;
  max-width: 75rem;
  min-height: 20rem;
  padding: 1rem;
  border-radius: 3px;
  opacity: 0;
  overflow-y: auto;
  visibility: hidden;
  box-shadow: 0 2px 10px rgba(#000, 0.1);
  backface-visibility: hidden;
  transform: scale(1.2);
  //   transition: all $speed $easing;

  .close-modal {
    position: absolute;
    cursor: pointer;
    top: 5px;
    right: 15px;
    opacity: 0;
    backface-visibility: hidden;
    // transition: opacity $speed $easing, transform $speed $easing;
    // transition-delay: $delay;

    svg {
      width: 1.75em;
      height: 1.75em;
    }
  } // close modal

  .modal-content {
    opacity: 0;
    backface-visibility: hidden;
    // transition: opacity $speed $easing;
    // transition-delay: $delay;
  } // content

  &.active {
    visibility: visible;
    opacity: 1;
    transform: scale(1);

    .modal-content {
      opacity: 1;
    }

    .close-modal {
      transform: translateY(10px);
      opacity: 1;
    }
  }
}
</style>
