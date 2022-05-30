<template>
  <div class="row wrap justify-center q-ma-md">
    <q-badge
      v-for="category in bookInfo.volumeInfo.categories"
      rounded
      color="orange"
      :label="category"
      :key="category"
      class="q-ma-md"
    />
  </div>
</template>
<script>
export default {
  props: ["bookInfo"],
};
</script>
