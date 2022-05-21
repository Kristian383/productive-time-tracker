<template>
  <div class="add-modal-wrapper open" id="modal" ref="modal">
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
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  padding: 8px;

  .add-time-entry-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    max-width: 460px;
    background-color: #fff;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @include md {
      padding: 1rem;
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
</style>
