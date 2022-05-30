import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/views/HomePage.vue";
import FavoritePage from "./components/views/FavoritePage.vue";
import BookDetails from "./components/views/BookDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", component: HomePage },
    { path: "/favorite", component: FavoritePage },
    { path: "/", redirect: "/home" },
    { path: "/:id", component: BookDetails },
  ],
});

createApp(App)
  .use(createPinia())
  .use(Quasar, quasarUserOptions)
  .use(router)
  .mount("#app");
