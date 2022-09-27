<template>
  <div>
    <h3 class="text-2xl mb-2">Experience</h3>
    <hr />
    <div v-for="experience in experiences" :key="experience.companyName">
      <strong>{{ experience.companyName }},</strong>
      {{ experience.companyAddress }}
      <br />
      <strong>{{ experience.title }}</strong> ({{ experience.dateStart }} -
      {{ experience.dateEnd }})
      <ul class="list-disc ml-5">
        <li
          v-for="jobDescription in experience.jobDescriptions"
          :key="jobDescription"
        >
          {{ jobDescription }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          companyName: "Luna Web Design",
          companyAddress: "New York",
          title: "Web Developer",
          dateStart: "09/2015",
          dateEnd: "05/2019",
          jobDescriptions: [
            "Cooperate with designers to create clean interfaces and simple, intuitive interactions and experiences.",
            "Develop project concepts and maintain optimal workflow.",
            "Work with senior developer to manage large, complex design projects for corporate clients.",
            "Complete detailed programming and development tasks for front end public and internal websites as well as challenging back-end server code.",
            "Carry out quality assurance tests to discover errors and optimize usability.",
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
