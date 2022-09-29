<template>
  <div>
    <h3 class="text-2xl mb-2">Skills</h3>
    <hr />
    <div class="columns-2">
      <div v-for="skill in usersSkills" :key="skill.name">
        <strong>{{ skill.name }}</strong> ({{ skill.level }})
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["usersSkills"],
};
</script>

<style></style>
