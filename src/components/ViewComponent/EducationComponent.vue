<template>
  <div>
    <h3 class="text-2xl mb-2">Education</h3>
    <hr />
    <div v-for="education in usersEducations" :key="education.school_name">
      <strong>{{ education.school_name }},</strong>
      {{ education.school_address }}
      <br />
      <strong>{{ education.degree }}</strong> in {{ education.major }} -
      {{ education.date_graduated }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["usersEducations"],
};
</script>

<style></style>
