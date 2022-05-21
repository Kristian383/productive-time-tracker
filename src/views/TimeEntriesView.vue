<template>
  <base-card>
    <div class="time-entries-container">
      <time-entry-item></time-entry-item>
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

<style lang="scss" scoped></style>
