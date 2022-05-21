<template>
  <base-card>
    <div class="time-entries-container">
      <time-entry-item v-for="time in 3" :key="time"></time-entry-item>
    </div>
  </base-card>
</template>

<script>
import TimeEntryItem from "../components/TimeEntryItem.vue";
export default {
  components: {
    TimeEntryItem,
  },
};
</script>

<style lang="scss" scoped>
.time-entries-container {
  border-radius: 6px;
  border: 1px solid $border_color;
}
</style>
