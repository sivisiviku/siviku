<template>
  <NavComponent></NavComponent>
  <router-view />
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";

export default {
  components: {
    NavComponent,
  },
  name: "App",
};
</script>

<style></style>
