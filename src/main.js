/* eslint-disable prettier/prettier */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import BaseCard from "./components/ui/BaseCard.vue"


import {
    faEdit,
    faTrash,
    faClock,
    faBars,
    faSignOutAlt,
    faPlusSquare,
    faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(faClock, faEdit, faTrash, faBars, faSignOutAlt, faPlusSquare, faPlusCircle);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component('base-card', BaseCard)

app.use(router);
app.use(store);
app.mount("#app");
