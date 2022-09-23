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
      photo:
        "https://firebasestorage.googleapis.com/v0/b/siviku-b91d0.appspot.com/o/foto.jpg?alt=media&token=27b62e83-8c3e-42bb-b4e7-354e8498eccc",
    };
  },
};
</script>

<style></style>
