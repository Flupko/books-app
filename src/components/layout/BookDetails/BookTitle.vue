<template>
  <span id="title" class="text-h4">{{ bookInfo.volumeInfo.title }}</span>
</template>
<script>
export default {
  props: ["bookInfo"],
};
</script>
