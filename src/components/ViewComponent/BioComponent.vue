<template>
  <div>
    <h1 class="text-4xl mb-4">
      <strong>{{ firstName }} {{ lastName }}</strong>
    </h1>
    <h1 class="text-2xl mb-4">{{ occupation }}</h1>
    <img :src="photo" alt="" width="300" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Christopher",
      lastName: "Morgan",
      occupation: "Software Engineer",
      photo: "http://localhost:8081/images/foto-1664145872036.jpg",
    };
  },
};
</script>

<style></style>
