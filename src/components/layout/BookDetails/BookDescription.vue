<template>
  <span v-html="bookInfo.volumeInfo.description"></span>
</template>
<script>
export default {
  props: ["bookInfo"],
};
</script>
