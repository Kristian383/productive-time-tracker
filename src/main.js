/* eslint-disable prettier/prettier */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
    faEdit,
    faTrash,
    faClock,
    faBars
} from "@fortawesome/free-solid-svg-icons";

library.add(faClock, faEdit, faTrash, faBars);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(store);
app.mount("#app");
