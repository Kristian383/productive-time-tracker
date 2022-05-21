<template>
  <div class="add-entry-wrapper open" id="modal" ref="modal">
    <!-- <transition name="fade"> -->
    <div class="add-entry">
      <div class="modal-header">
        <span
          ><font-awesome-icon
            icon="trash"
            class="trash-icon"
          ></font-awesome-icon
        ></span>
        <h3>Delete account?</h3>
      </div>
      <div class="modal-body">
        <p>
          You'll <b>permanently</b> lose all your data and there is no way back.
        </p>
        <p>
          We will send you <b>link</b> on your email to make sure its really
          you.
        </p>
      </div>
      <div class="modal-footer">
        <button class="btn cancel-btn" @click="closeDeleteModal">Cancel</button>
        <button class="btn delete-btn" @click="sendDeleteEmail">
          Send delete email
        </button>
      </div>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  emits: ["closeModal", "send-delete"],
  methods: {
    closeDeleteModal() {
      this.$emit("closeModal");
    },
    sendDeleteEmail() {
      this.$emit("send-delete");
    },
  },
};
</script>

<style lang="scss" scoped>
.add-entry-wrapper {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  padding: 8px;

  .add-entry {
    transition: 0.3s all ease-in;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    max-width: 450px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    border-top: 6px solid var(--burgundy);
    color: $text_dark;
    border-radius: 4px;
    gap: 18px;

    /* max-width: 95%; */
    .modal-header {
      display: flex;
      flex-direction: column;
      position: relative;
      padding-top: 8px;
      span {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: -20px;
        transform: translate(-50%, -50%);
        padding: 4px;
        background-color: var(--burgundy);
        .trash-icon {
          font-size: 28px;
          color: #fff;
          margin-top: 6px;
          margin-left: 1px;
        }
      }
    }
    .modal-body p {
      font-size: 16px;
      margin-bottom: 18px;
      /* text-align: start; */
    }
    .modal-footer {
      display: flex;
      /* flex-wrap: wrap; */
      gap: 8px;
      .btn {
        padding: 12px 8px;
        border-radius: 8px;
        width: 100%;
        outline: none;
        background-color: #f8f8f8;
        /* border: 2px solid black; */
        border: none;
        cursor: pointer;
        font-size: inherit;
        font-weight: 600;
        transition: 0.2s all ease-in;
      }
      .btn.delete-btn {
        background-color: var(--burgundy);
        color: #fff;
        &:hover {
          background-color: var(--levi_red);
        }
      }
      .btn.cancel-btn:hover {
        background-color: var(--chips_gray);
      }
    }
  }
}
</style>
