<template>
  <q-page>
    <SearchBar> </SearchBar>
    <BookList v-if="store.searchResults" :bookList="store.searchResults">
    </BookList>
    <AppInfo v-else> </AppInfo>
  </q-page>
</template>
<script>
import SearchBar from "../layout/SearchBar.vue";
import BookList from "../layout/BookList.vue";
import AppInfo from "../layout/AppInfo.vue";
import { useStore } from "../../store/index";
export default {
  components: {
    SearchBar,
    BookList,
    AppInfo,
  },
  setup() {
    const store = useStore();
    return { store };
  },
};
</script>
