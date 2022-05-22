<template>
  <base-card>
    <h2 class="title">Time entries for today ({{ todayFormated }})</h2>
    <div class="time-entries-container">
      <time-entry-item
        v-for="entry in allTimeEntries"
        :key="entry.id"
        :entry="entry"
      ></time-entry-item>
    </div>
    <transition name="fade">
      <AddEntryModal v-if="showModal"></AddEntryModal>
    </transition>
  </base-card>
</template>

<script>
import TimeEntryItem from "../components/time-entry-item/TimeEntryItem.vue";
import AddEntryModal from "../components/time-entry-item/AddEntryModal.vue";

import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    TimeEntryItem,
    AddEntryModal,
  },
  props: ["query"],
  setup(props) {
    const store = useStore();
    const todayFormated = store.getters["time/getTodaysDate"];

    const allTimeEntries = computed(() => {
      return store.getters["time/getTimeEntries"];
    });

    const showModal = computed(() => {
      if (props.query.edit || props.query.add) {
        document.body.style.overflow = "hidden";
        return true;
      } else {
        document.body.style.overflow = "visible";
        return false;
      }
    });

    return {
      showModal,
      allTimeEntries,
      todayFormated,
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 1rem;
  text-align: center;
  color: $text_dark;
}

.time-entries-container {
  border-radius: 6px;
  border: 1px solid $border_color;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
}
</style>
