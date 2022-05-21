/* eslint-disable prettier/prettier */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import BaseCard from "./components/ui/BaseCard.vue"
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import {
    faEdit,
    faTrash,
    faClock,
    faBars,
    faSignOutAlt,
    faPlusSquare,
    faPlusCircle,
    faPlay,
    faEllipsisH,
    faFolder,
    faThList
} from "@fortawesome/free-solid-svg-icons";

library.add(faClock, faEdit, faTrash, faBars, faSignOutAlt, faPlusSquare, faPlusCircle, faPlay, faEllipsisH, faFolder, faThList);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component('base-card', BaseCard)
app.component('quill-editor', QuillEditor)

app.use(router);
app.use(store);
app.mount("#app");
