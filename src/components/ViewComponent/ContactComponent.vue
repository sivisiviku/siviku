<template>
  <div>
    <h3 class="text-2xl mb-2">Contact</h3>
    <hr />
    <div v-for="(value, key) in usersContact" :key="key">
      <strong>{{ key.charAt(0).toUpperCase() + key.slice(1) }}:</strong>
      <br />{{ value }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["usersContact"],
};
</script>

<style></style>
