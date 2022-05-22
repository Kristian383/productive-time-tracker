<template>
  <div class="add-modal-wrapper" id="modal" ref="modal">
    <div class="add-time-entry-container">
      <h2>{{ formTitle }}</h2>
      <div class="input-group">
        <label for="project">Project</label>
        <input id="project" v-model="project" type="text" :disabled="true" />
      </div>
      <div class="input-group">
        <label for="service">Service</label>
        <input
          id="service"
          v-model.trim="serviceName"
          type="text"
          :disabled="true"
        />
      </div>
      <div><b>Date</b>: {{ todaysDate }}</div>
      <div class="input-group">
        <span class="duration-time-info">= {{ calculatedDuration }}</span>
        <label for="duration">Duration</label>
        <input
          id="duration"
          v-model="duration"
          type="text"
          placeholder="insert minutes"
          @input="handleDuration"
        />
        <p style="color: red; font-size: 14px" v-if="!durationIsValid">
          Only valid numbers please
        </p>
      </div>
      <label for="note"><b>Note</b></label>
      <quill-editor
        ref="quill"
        theme="snow"
        :toolbar="toolBarOptions"
        placeholder="Enter a note"
      ></quill-editor>
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

import calculateDuration from "@/helpers/calculateDuration";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const project = ref("Productive task for junior fronted developer");
    const service = ref("");
    const serviceName = ref("");
    const quill = ref(null);
    const todaysDate = store.getters["time/getTodaysDate"];
    const formTitle = route.query.edit ? "Edit time entry" : "New time entry";

    const toolBarOptions = [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
    ];

    const duration = ref("");
    const durationIsValid = ref(true);
    const calculatedDuration = ref("0min");

    function handleDuration() {
      //simple regex since we only expect "minutes"
      var reg = /^[1-9]\d*$/;

      if (!reg.test(duration.value) || duration.value > 10000) {
        durationIsValid.value = false;
        calculatedDuration.value = "0 min";
        return;
      }

      if (duration.value) {
        calculatedDuration.value = calculateDuration(duration.value);
        durationIsValid.value = true;
      }
    }

    function handleSubmit() {
      if (!durationIsValid.value || duration.value <= 0) {
        durationIsValid.value = false;
        return;
      }

      const payload = {
        data: {
          type: "time_entries",
          attributes: {
            note: quill.value.getHTML(),
            date: todaysDate,
            time: Number(duration.value),
          },
        },
      };

      if (route.query.add) {
        payload.data.relationships = {
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
        };

        store.dispatch("time/postTimeEntry", payload).then((res) => {
          if (res === true) {
            router.push("time-entries");
          }
        });
      } else {
        payload.id = route.query.edit;
        store.dispatch("time/editTimeEntry", payload).then((res) => {
          if (res === true) {
            router.push("time-entries");
          }
        });
      }
    }

    function closeModal() {
      router.push("/time-entries");
    }

    onMounted(() => {
      //load first service -> this is half hardcoded
      const services = store.getters["time/getServices"];
      if (services.length === 0) {
        router.push("/time-entries");
        return;
      }

      service.value = services[0];
      serviceName.value = service.value.attributes.name;

      let editId = route.query.edit;
      if (editId) {
        const timeEntryData = store.getters["time/getTimeEntry"](editId);

        const quillContent = timeEntryData.attributes.note;
        quill.value.setHTML(quillContent);
        duration.value = timeEntryData.attributes.time;
        calculatedDuration.value = calculateDuration(duration.value);

        // console.log(timeEntryData);
      }
    });

    return {
      duration,
      project,
      service,
      toolBarOptions,
      quill,
      formTitle,
      closeModal,
      serviceName,
      todaysDate,
      handleDuration,
      handleSubmit,
      durationIsValid,
      calculatedDuration,
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
        // bottom: 0.7rem;
        top: 2.7rem;
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
