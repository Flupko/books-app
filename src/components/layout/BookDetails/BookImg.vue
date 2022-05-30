<template>
  <q-img
    v-if="bookInfo.volumeInfo.imageLinks"
    :src="bookInfo.volumeInfo.imageLinks.smallThumbnail"
    style="width: 300px; height: 450px"
    class="q-ma-xl"
  ></q-img>

  <q-img
    v-else
    src="https://downloadwap.com/thumbs6/java-software/preview/All/s/mobiletran080334.jpg"
    style="width: 300px; height: 450px"
    class="q-ma-xl"
  ></q-img>
</template>
<script>
export default {
  props: ["bookInfo"],
};
</script>
