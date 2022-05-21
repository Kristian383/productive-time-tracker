import { createStore } from "vuex";
import timeEntryModule from "./time-entry/index";

export default createStore({
  modules: { time: timeEntryModule },
  state: {
    sidebarIsActive: true,
    mobile: null,
  },
  getters: {
    sidebarIsActive(state) {
      return state.sidebarIsActive;
    },
    isMobile(state) {
      return state.mobile;
    },
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarIsActive = !state.sidebarIsActive;
    },
    removeSidebar(state) {
      state.sidebarIsActive = false;
    },
    activateSidebar(state) {
      state.sidebarIsActive = true;
    },
    setMobile(state, payload) {
      state.mobile = payload;
    },
  },
  actions: {},
});
