<template>
  <span
    v-for="author in bookInfo.volumeInfo.authors"
    :key="author + new Date()"
    class="text-h6 q-ma-xs"
  >
    {{ author }}
  </span>
</template>
<script>
export default {
  props: ["bookInfo"],
};
</script>
