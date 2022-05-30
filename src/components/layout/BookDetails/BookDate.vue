<template>
  <span v-if="bookInfo.volumeInfo.publishedDate" class="text-subtitle2 q-ma-md">
    Publication date:
    {{ bookInfo.volumeInfo.publishedDate.slice(0, 4) }}</span
  >
  <span id="year" v-else> No publication date. </span>
</template>
<script>
export default {
  props: ["bookInfo"],
};
</script>
