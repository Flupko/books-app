<template>
  <div class="bookInfoContainer" v-if="bookInfo">
    <div class="bookInfo">
      <BookImg :bookInfo="bookInfo"> </BookImg>
      <BookTitle :bookInfo="bookInfo"> </BookTitle>
      <BookWriter :bookInfo="bookInfo"> </BookWriter>
      <BookBadges :bookInfo="bookInfo"> </BookBadges>
      <BookDescription :bookInfo="bookInfo"> </BookDescription>
      <BookPages :bookInfo="bookInfo"> </BookPages>
      <BookPublisher :bookInfo="bookInfo"> </BookPublisher>
      <BookDate :bookInfo="bookInfo"> </BookDate>
      <LikeIcon :bookInfo="bookInfo" size="2em"> </LikeIcon>
    </div>
  </div>
  <h3 v-else-if="bookInfo === null">No books found.</h3>
</template>
<script>
import { useStore } from "../../store/index";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import BookTitle from "../layout/BookDetails/BookTitle.vue";
import BookImg from "../layout/BookDetails/BookImg.vue";
import BookBadges from "../layout/BookDetails/BookBadges.vue";
import BookDescription from "../layout/BookDetails/BookDescription.vue";
import BookDate from "../layout/BookDetails/BookDate.vue";
import BookPublisher from "../layout/BookDetails/BookPublisher.vue";
import BookWriter from "../layout/BookDetails/BookWriter.vue";
import BookPages from "../layout/BookDetails/BookPages.vue";
import LikeIcon from "../layout/LikeIcon.vue";
export default {
  components: {
    BookTitle,
    BookImg,
    BookBadges,
    BookDescription,
    BookDate,
    BookPublisher,
    BookWriter,
    BookPages,
    LikeIcon,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    let bookInfo = ref(false);

    onMounted(async () => {
      let data = await store.getBookById(route.params.id);
      data === null ? bookInfo.value === null : (bookInfo.value = data);
    });
    return { bookInfo, store };
  },
};
</script>
<style scoped>
.bookInfoContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}
h3 {
  display: flex;
  justify-content: center;
}
.bookInfo {
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}
</style>
