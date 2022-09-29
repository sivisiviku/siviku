<template>
  <div>
    <h3 class="text-2xl mb-2">Experience</h3>
    <hr />
    <div v-for="experience in usersExperiences" :key="experience.company_name">
      <strong>{{ experience.company_name }},</strong>
      {{ experience.company_address }}
      <br />
      <strong>{{ experience.title }}</strong> ({{ experience.date_start }} -
      {{ experience.date_end }})
      <ul class="list-disc ml-5">
        <li
          v-for="jobDescription in experience.job_descriptions"
          :key="jobDescription.job_description"
        >
          {{ jobDescription.job_description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["usersExperiences"],
};
</script>

<style></style>
