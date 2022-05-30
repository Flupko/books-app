<template>
  <q-toolbar class="shadow-2">
    <q-tabs v-model="tab">
      <q-route-tab name="tab1" label="Home" to="/home" />
      <q-route-tab name="tab2" label="Favorite" to="/favorite" />
    </q-tabs>
  </q-toolbar>
</template>
<script>
export default {
  data() {
    return {
      tab: "tab1",
    };
  },
};
</script>
<style scoped>
.q-toolbar {
  height: 70px;
}
.q-tabs {
  height: 100%;
}
</style>
