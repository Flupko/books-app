<template>
  <span class="text-subtitle2 q-ma-md">
    {{ bookInfo.volumeInfo.pageCount }} pages
  </span>
</template>
<script>
export default {
  props: ["bookInfo"],
};
</script>
