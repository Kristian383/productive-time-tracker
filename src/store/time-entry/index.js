/* eslint-disable prettier/prettier */
import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

export default {
    namespaced: true,
    state() {
        return {
            person_ID: null,
            organization_ID: "20530",
            timeEntries: [],
            services: [],
        };
    },
    getters,
    actions,
    mutations,
};
