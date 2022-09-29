<template>
  <div>
    <h1 class="text-4xl mb-4">
      <strong>{{ usersBio.first_name }} {{ usersBio.last_name }}</strong>
    </h1>
    <h1 class="text-2xl mb-4">{{ usersBio.occupation }}</h1>
    <img :src="usersBio.photo" alt="" width="300" />
  </div>
</template>

<script>
export default {
  props: ["usersBio"],
};
</script>

<style></style>
