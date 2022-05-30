<template>
  <span class="text-subtitle2 q-ma-md">
    Publisher: {{ bookInfo.volumeInfo.publisher }}</span
  >
</template>
<script>
export default {
  props: ["bookInfo"],
};
</script>
