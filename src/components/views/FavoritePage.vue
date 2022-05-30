<template>
  <q-page>
    <BookList :bookList="store.favoriteBooks"> </BookList>
  </q-page>
</template>
<script>
import BookList from "./../layout/BookList.vue";
import { useStore } from "./../../store/index";
export default {
  components: {
    BookList,
  },
  setup() {
    const store = useStore();
    return { store };
  },
};
</script>
