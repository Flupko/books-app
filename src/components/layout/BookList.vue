<template>
  <div class="container">
    <BookSimple v-for="book in bookList" :bookInfo="book" :key="book.id">
    </BookSimple>
  </div>
</template>
<script>
import BookSimple from "./BookSimple.vue";
export default {
  components: {
    BookSimple,
  },
  props: ["bookList"],
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
