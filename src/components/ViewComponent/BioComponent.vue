<template>
  <div>
    <h1 class="text-4xl mb-4">{{ firstName }} {{ lastName }}</h1>
    <img :src="photo" alt="" width="300" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Christopher",
      lastName: "Morgan",
      photo: "http://localhost:8081/images/foto-1664117238284.jpg",
    };
  },
};
</script>

<style></style>
