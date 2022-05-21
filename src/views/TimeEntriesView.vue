<template>
  <base-card>
    <h2 style="margin-bottom: 1rem; text-align: center">
      Time entries for today (20-05-2022)
    </h2>
    <div class="time-entries-container">
      <time-entry-item v-for="time in 3" :key="time"></time-entry-item>
    </div>
    <transition name="fade">
      <AddEntryModal v-if="showModal"></AddEntryModal>
    </transition>
  </base-card>
</template>

<script>
import TimeEntryItem from "../components/time-entry-item/TimeEntryItem.vue";
// import { useRoute } from "vue-router";
// import EditTimeEntry from "../components/time-entry-item/EditTimeEntry.vue";
import AddEntryModal from "../components/time-entry-item/AddEntryModal.vue";

import { computed } from "vue";

export default {
  components: {
    TimeEntryItem,
    // EditTimeEntry,
    AddEntryModal,
  },
  props: ["query"],
  setup(props) {
    // const route = useRoute();
    const showModal = computed(() => {
      console.log(props.query);
      if (props.query.edit || props.query.add) {
        return true;
      } else {
        return false;
      }
      // return props.query.edit ? props.query.edit : false;
    });
    // console.log(route);
    console.log(props.query);

    return { showModal };
  },
};
</script>

<style lang="scss" scoped>
.time-entries-container {
  border-radius: 6px;
  border: 1px solid $border_color;
  max-width: 1300px;
  margin: 0 auto;
}
</style>
