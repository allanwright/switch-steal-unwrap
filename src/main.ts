import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHouse,
  faTrash,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

library.add(faHouse);
library.add(faTrash);
library.add(faFlagCheckered);
app.component("FontAwesomeIcon", FontAwesomeIcon);

app.mount("#app");
