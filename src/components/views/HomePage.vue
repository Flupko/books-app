<template>
  <q-page>
    <SearchBar> </SearchBar>
    <BookList :bookList="store.searchResults"> </BookList>
  </q-page>
</template>
<script>
import SearchBar from "../layout/SearchBar.vue";
import BookList from "../layout/BookList.vue";
import { useStore } from "../../store/index";
export default {
  components: {
    SearchBar,
    BookList,
  },
  setup() {
    const store = useStore();
    return { store };
  },
};
</script>
