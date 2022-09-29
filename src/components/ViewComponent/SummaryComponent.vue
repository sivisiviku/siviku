<template>
  <div>
    <h3 class="text-2xl mb-2">Summary</h3>
    <hr />
    <p>{{ usersBio.summary }}</p>
  </div>
</template>

<script>
export default {
  props: ["usersBio"],
};
</script>

<style></style>
