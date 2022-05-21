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
        <p style="color: #636688">Open hours</p>
      </div>
    </div>
    <!--  -->
    <div class="entry-notes">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta fugit
      repudiandae esse cupiditate fugiat. Illum architecto rerum natus sed
      facilis!
    </div>
    <!--  -->
    <div class="duration-edit-data">
      <span class="duration">03:00</span>
      <span class="icon-wrapper">
        <font-awesome-icon icon="play"></font-awesome-icon>
      </span>
      <span class="icon-wrapper">
        <font-awesome-icon icon="ellipsis-h"></font-awesome-icon>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.time-entry-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .first-column {
    display: flex;
    gap: 1rem;
    align-items: center;
    color: $text_dark;
    font-size: 0.9rem;
    // flex-grow: 1;

    @include md {
      // gap: 3rem;
      max-width: 25rem;
    }

    .entry-image {
      width: 3.5rem;
      height: 3.5rem;
      vertical-align: middle;
    }
  }

  .entry-notes {
    // flex-grow: 3;
    display: flex;
  }

  .duration-edit-data {
    // flex-grow: 2;
    display: flex;
    gap: 2.4rem;
    align-items: center;
    justify-content: center;

    .icon-wrapper {
      cursor: pointer;
      padding: 5px 8px;
      border-radius: 4px;
      text-align: center;
      transition: 0.2s all ease-in;
      font-size: 1.2rem;

      &:hover {
        background-color: $background_blue_hover;
      }
    }

    @include md {
      gap: 1rem;
    }
  }

  @include md {
    flex-direction: row;
  }
}
</style>
