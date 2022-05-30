<template>
  <q-icon
    v-if="store.checkBookPresence(bookInfo.id)"
    name="favorite"
    :size="sizeIcon"
    color="red"
    @click="store.removeFavoriteBook(bookInfo)"
    class="q-ma-md"
  >
  </q-icon>
  <q-icon
    v-else
    name="favorite_bordered"
    :size="sizeIcon"
    color="black"
    @click="store.addFavoriteBook(bookInfo)"
    class="q-ma-md"
  ></q-icon>
</template>
<script>
import { useStore } from "../../store/index.js";
export default {
  props: ["bookInfo", "sizeIcon"],
  setup() {
    const store = useStore();
    return { store };
  },
};
</script>
