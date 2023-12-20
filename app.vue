<script setup lang="ts">
const { data, error } = await useFetch('/api/hello', {query: {priceId: "test"}})
</script>

<template>
  <pre>{{ data }}</pre>
  <pre>{{ error }}</pre>
</template>