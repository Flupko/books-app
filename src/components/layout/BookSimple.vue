<template>
  <q-card class="q-ma-md">
    <q-img
      v-if="bookInfo.volumeInfo.imageLinks"
      :src="bookInfo.volumeInfo.imageLinks.smallThumbnail"
      id="img"
    ></q-img>
    <q-img
      v-else
      src="https://downloadwap.com/thumbs6/java-software/preview/All/s/mobiletran080334.jpg"
      id="img"
    ></q-img>
    <q-card-section class="cardInfo">
      <span style="font-size: 1.2em">{{ titleValue }}</span>
      <span
        v-for="author in bookInfo.volumeInfo.authors"
        :key="author + new Date()"
      >
        {{ author }}
      </span>
      <span id="year" v-if="bookInfo.volumeInfo.publishedDate">
        {{ bookInfo.volumeInfo.publishedDate.slice(0, 4) }}
      </span>
      <span id="year" v-else> No publication date. </span>
      <q-separator></q-separator>
      <q-card-actions align="center" class="actions">
        <LikeIcon :bookInfo="bookInfo" size="1.5em"> </LikeIcon>
        <q-btn
          class="q-ma-md"
          color="primary"
          @click="$router.push(`/${bookInfo.id}`)"
          >DETAILS</q-btn
        >
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>
<script>
import { useStore } from "../../store/index.js";
import { computed } from "vue";
import LikeIcon from "./LikeIcon.vue";
export default {
  props: ["bookInfo"],
  components: {
    LikeIcon,
  },
  setup(props) {
    const store = useStore();
    const titleValue = computed(() => {
      const titleName = props.bookInfo.volumeInfo.title;
      return titleName.length > 34
        ? titleName.slice(0, 34).concat("...")
        : titleName;
    });
    return { store, titleValue };
  },
};
</script>
<style scoped>
.cardInfo {
  display: flex;
  flex-direction: column;
}
.q-card {
  width: 200px;
}
#year {
  font-weight: bold;
  font-style: italic;
}
#img {
  height: 300px;
  width: 200px;
}
</style>
