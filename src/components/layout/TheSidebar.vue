<template>
  <div class="hamburger" @click="toggleSidebar">
    <font-awesome-icon id="btn" icon="bars"></font-awesome-icon>
  </div>

  <transition name="fade">
    <div class="sidebar" v-if="sidebarIsActive">
      <div class="logo">
        <svg
          width="140"
          height="28"
          viewBox="0 0 140 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#logo-text-a)">
            <path
              d="M44.279 14.061c0 3.403-2.474 6.03-5.476 6.03-1.535 0-2.658-.525-3.413-1.392v4.867h-3.436V8.352h3.436v1.074c.757-.869 1.88-1.393 3.413-1.393 3.002-.002 5.476 2.626 5.476 6.029zm-3.437 0c0-1.712-1.146-2.786-2.727-2.786-1.58 0-2.726 1.074-2.726 2.786 0 1.714 1.146 2.786 2.726 2.786 1.581 0 2.727-1.072 2.727-2.786zM52.318 8.123v3.722c-1.63-.14-3.436.583-3.436 2.764v5.162h-3.437V8.35h3.437v2.033c.458-1.53 1.994-2.261 3.436-2.261zM52.71 14.061c0-3.403 2.703-6.03 6.07-6.03 3.367 0 6.07 2.626 6.07 6.03 0 3.404-2.703 6.03-6.07 6.03-3.367 0-6.07-2.627-6.07-6.03zm8.704 0c0-1.621-1.146-2.695-2.634-2.695-1.49 0-2.634 1.074-2.634 2.695 0 1.622 1.146 2.695 2.634 2.695s2.634-1.073 2.634-2.695zM78.093 4.667V19.77h-3.437v-1.074c-.756.867-1.879 1.393-3.413 1.393-3.001 0-5.475-2.626-5.475-6.03 0-3.405 2.474-6.031 5.475-6.031 1.536 0 2.658.526 3.413 1.393V4.666h3.437zm-3.437 9.394c0-1.712-1.146-2.786-2.727-2.786-1.58 0-2.727 1.074-2.727 2.786 0 1.714 1.147 2.786 2.727 2.786 1.581 0 2.727-1.072 2.727-2.786zM90.726 8.351v11.42h-3.437v-1.074c-.618.846-1.764 1.393-3.276 1.393-2.314 0-4.284-1.645-4.284-4.728V8.35h3.436v6.51c0 1.416.893 2.078 1.994 2.078 1.26 0 2.13-.731 2.13-2.353V8.351h3.437zM92.054 14.061c0-3.403 2.589-6.03 6.07-6.03 2.224 0 4.194 1.164 5.178 2.923L100.3 12.69c-.389-.8-1.213-1.279-2.222-1.279-1.49 0-2.59 1.074-2.59 2.65 0 1.576 1.1 2.65 2.59 2.65 1.007 0 1.855-.479 2.222-1.279l3.002 1.713c-.986 1.78-2.932 2.947-5.177 2.947-3.482 0-6.071-2.628-6.071-6.03zM107.929 11.64v4.042c0 .984.847 1.074 2.359.984v3.105c-4.49.457-5.796-.89-5.796-4.089V7.077l3.437-1.284V8.35h2.359v3.289h-2.359v.002zM111.868 8.351h3.436v11.42h-3.436V8.35zM128.477 8.351l-4.239 11.421h-3.895l-4.238-11.42h3.803l2.384 7.24 2.383-7.24h3.802zM134.479 17.11c.938 0 1.645-.275 2.366-.851l2.582 1.48c-1.122 1.553-2.818 2.353-4.994 2.353-3.918 0-6.345-2.627-6.345-6.03 0-3.405 2.474-6.032 6.094-6.032 3.345 0 5.82 2.581 5.82 6.031 0 .479-.046.853-.139 1.287h-8.201c.435 1.188 1.556 1.762 2.817 1.762zm2.24-4.188c-.306-1.289-1.314-1.971-2.499-1.971-1.377 0-2.352.743-2.691 1.97h5.19z"
              fill="currentColor"
            ></path>
            <path
              d="M4.695 22.47.132 14.76a.946.946 0 0 1 .332-1.296l3.603-2.132a.947.947 0 0 1 1.296.332L7.93 16l2.662-4.58c3.33-5.459 6.776.574 5.206 3.137l-4.581 7.886a2.206 2.206 0 0 1-1.9 1.099l-2.716.01a2.207 2.207 0 0 1-1.906-1.082z"
              fill="url(#logo-text-b)"
            ></path>
            <path
              d="M23.992 16.68a3.423 3.423 0 1 1-6.846 0 3.423 3.423 0 0 1 6.846 0zM9.79 19.15c.752 1.275 2.599 1.269 3.342-.011l2.667-4.59c1.39-2.268 2.962-3.48 4.926-3.748.476-.065.942-.174 1.07-.89l.728-4.09a.96.96 0 0 0-.939-1.156c-3.58 0-7.743 1.42-10.99 6.745l-2.665 4.582L9.79 19.15z"
              fill="url(#logo-text-c)"
            ></path>
          </g>
          <defs>
            <linearGradient
              id="logo-text-b"
              x1="-1.167"
              y1="7"
              x2="10.111"
              y2="23.333"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AB40FF"></stop>
              <stop offset="1" stop-color="#5D2BFF"></stop>
            </linearGradient>
            <linearGradient
              id="logo-text-c"
              x1="19.055"
              y1="6.222"
              x2="10.8"
              y2="18.441"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AB40FF"></stop>
              <stop offset="1" stop-color="#2D00AD"></stop>
            </linearGradient>
            <clipPath id="logo-text-a">
              <path
                fill="#fff"
                transform="translate(0 4.667)"
                d="M0 0h140v18.9H0z"
              ></path>
            </clipPath>
          </defs>
        </svg>
      </div>
      <ul class="nav_list">
        <li>
          <router-link to="/time-entries?add=true" class="add-btn">
            <font-awesome-icon
              class="ikona"
              icon="plus-square"
            ></font-awesome-icon>
            <span class="links_name">Add time entry </span>
          </router-link>
        </li>
        <li @click="logOutUser">
          <router-link to="/time-entries" active-class="active-link">
            <font-awesome-icon class="ikona" icon="clock"></font-awesome-icon>
            <span class="links_name">Time entries </span>
          </router-link>
        </li>
        <!-- dummy data below -->
        <li>
          <router-link to="/">
            <font-awesome-icon class="ikona" icon="th-list"></font-awesome-icon>
            <span class="links_name">Tasks </span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <font-awesome-icon class="ikona" icon="folder"></font-awesome-icon>
            <span class="links_name">Projects </span>
          </router-link>
        </li>
      </ul>

      <div class="profile_content">
        <div class="profile">
          <div class="profile_details">
            <img src="@/assets/images/user.png" alt="" />
            <div class="name">Kristian Nenadović</div>
            <font-awesome-icon
              class="logout"
              icon="sign-out-alt"
            ></font-awesome-icon>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const sidebarIsActive = computed(() => {
      return store.getters.sidebarIsActive;
    });

    function toggleSidebar() {
      store.commit("toggleSidebar");
    }

    return {
      sidebarIsActive,
      toggleSidebar,
    };
  },
};
</script>

<style lang="scss" scoped>
.hamburger {
  position: fixed;
  top: 18px;
  left: 24px;
  font-size: 24px;
  z-index: 102;
  cursor: pointer;
}

.sidebar {
  height: 100%;
  width: 100%;
  background-color: $background_blue;
  position: fixed;
  top: 0;
  left: 0;
  padding: 78px 14px;
  transition: all 0.2s ease;
  z-index: 50;
  border: 1px solid $border_color;

  @include sm {
    width: 240px;
  }

  .logo {
    z-index: 104;
    position: absolute;
    top: 22px;
    right: 25px;
  }
}

.sidebar .nav_list {
  height: 100%;

  li {
    list-style: none;
    height: 50px;
    position: relative;
    width: 100%;
    margin: 5px 0;

    .ikona {
      height: 50px;
      text-align: center;
      cursor: pointer;
    }

    a {
      color: $text_dark;
      background-color: inherit;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 14px;
      transition: all 0.4s ease;
      border-radius: 4px;
      padding-left: 16px;
      white-space: nowrap;
      font-size: 16px;

      &:hover {
        background: $background_blue_hover;
      }

      .links_name {
        opacity: 1;
        pointer-events: auto;
      }
    }

    .active-link {
      color: $sidebar_text_selected;
    }
  }

  .add-btn {
    background-color: $purple_button;
    color: #fff;

    &:hover {
      background-color: $purple_button_hover;
    }
  }
}

.sidebar .profile_content {
  position: absolute;
  color: $text_dark;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid $border_color;

  .profile {
    position: relative;
    padding: 14px 6px;
    height: 70px;

    .profile_details {
      opacity: 1;
      pointer-events: auto;
      display: flex;
      align-items: center;

      .logout {
        transform: rotate(180deg);
        font-size: 1.5rem;
        margin-left: auto;
        margin-right: 0.5rem;
      }

      .name {
        font-weight: 400;
        // margin-left: auto;
        font-size: 0.8rem;
        margin-left: 8px;
      }

      img {
        height: 45px;
      }
    }
  }
}
</style>
