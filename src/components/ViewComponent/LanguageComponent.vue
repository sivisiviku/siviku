<template>
  <div>
    <h3 class="text-2xl mb-2">Languages</h3>
    <hr />
    <div v-for="language in usersLanguages" :key="language.name">
      <strong>{{ language.name }}</strong> -
      {{ language.level.charAt(0).toUpperCase() + language.level.slice(1) }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["usersLanguages"],
};
</script>

<style></style>
