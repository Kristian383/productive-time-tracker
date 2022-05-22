<template>
  <div class="add-modal-wrapper" id="modal" ref="modal">
    <div class="add-time-entry-container">
      <!-- <h2>New time entry</h2> -->
      <h2>{{ formTitle }}</h2>
      <!-- <font-awesome-icon class="x-icon" icon="plus-circle" /> -->
      <div class="input-group error">
        <label for="project">Project</label>
        <input id="project" v-model="project" type="text" :disabled="true" />
      </div>
      <div class="input-group error">
        <label for="service">Service</label>
        <input
          id="service"
          v-model="serviceName"
          type="text"
          :disabled="true"
        />
      </div>
      <div><b>Date</b>: {{ todaysDate }}</div>
      <div class="input-group error">
        <label for="duration">Duration</label>
        <input
          id="duration"
          v-model="duration"
          type="text"
          placeholder="00:00"
          @input="handleDuration"
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
      <!--  -->
      <div class="bottom-section">
        <button class="btn save" @click="handleSubmit">Save</button>
        <button class="btn cancel" @click="closeModal">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const project = ref("Productive task for junior fronted developer");
    const service = ref("");
    const serviceName = ref("");
    const quill = ref(null);
    const route = useRoute();
    const router = useRouter();
    const todaysDate = store.getters["time/getTodaysDate"];
    const formTitle = route.query.edit ? "Edit time entry" : "New time entry";

    const toolBarOptions = [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
    ];

    const notes = ref("");
    // const notesText = ref("");

    const duration = ref("");

    function handleDuration(e) {
      let regex = /(^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$)/;
      console.log(regex.test(e.value));
      // if (duration.value) {
      //   console.log(duration.value);
      // }
    }

    function handleSubmit() {
      // console.log(first)
      console.log(todaysDate);
      const payload = {
        data: {
          type: "time_entries",
          attributes: {
            note: quill.value.getHTML(),
            date: todaysDate,
            time: Number(duration.value),
          },
          relationships: {
            person: {
              data: {
                type: "people",
                id: "271393",
              },
            },
            service: {
              data: {
                type: "services",
                id: service.value.id,
              },
            },
          },
        },
      };
      // console.log(service.value);
      console.log(payload);
      store.dispatch("time/postTimeEntry", payload);
    }

    function getHTML() {
      //   console.log(e);
      console.log(quill.value.getHTML());
    }

    function closeModal() {
      router.push("/time-entries");
    }

    onMounted(() => {
      const services = store.getters["time/getServices"];
      if (services.length === 0) {
        router.push("/time-entries");
        return;
      }
      service.value = services[0];
      serviceName.value = service.value.attributes.name;
      // console.log(service.value);
    });

    return {
      duration,
      project,
      service,
      toolBarOptions,
      notes,
      // notesText,
      getHTML,
      quill,
      formTitle,
      closeModal,
      serviceName,
      todaysDate,
      handleDuration,
      handleSubmit,
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
  z-index: 32;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  background-color: #fff;

  @include sm {
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.3);
    right: 0;
    bottom: 0;
    z-index: 999;
  }

  .add-time-entry-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    // justify-content: center;
    background-color: #fff;
    position: relative;
    padding: 1rem;
    height: 100%;

    @include sm {
      overflow-y: auto;
      padding: 2rem;
      max-width: 660px;
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
