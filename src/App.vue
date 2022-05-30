<template>
  <q-layout>
    <NavBar> </NavBar>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import NavBar from "./components/layout/NavBar.vue";

export default {
  name: "LayoutDefault",
  components: {
    NavBar,
  },
  setup() {
    return {
      leftDrawerOpen: ref("1"),
    };
  },
};
</script>
<style>
.q-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  overflow: hidden;
}
</style>
