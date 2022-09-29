<template>
  <div>
    <h3 class="text-2xl mb-2">Certifications</h3>
    <hr />
    <div
      v-for="certification in usersCertifications"
      :key="certification.certification"
    >
      <strong>{{ certification.certification }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  props: ["usersCertifications"],
};
</script>

<style></style>
