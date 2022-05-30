<template>
  <q-input
    filled
    placeholder="Search for a book"
    class="q-ma-md"
    v-model="inputValue"
  >
    <template v-slot:append>
      <q-icon name="search" @click="store.searchBook(inputValue)" />
    </template>
  </q-input>
</template>
<script>
import { useStore } from "../../store/index.js";
import { ref } from "vue";
export default {
  setup() {
    const store = useStore();
    let inputValue = ref("");
    return { store, inputValue };
  },
};
</script>
<style scoped>
.q-input {
  width: 90%;
  max-width: 500px;
}
</style>
