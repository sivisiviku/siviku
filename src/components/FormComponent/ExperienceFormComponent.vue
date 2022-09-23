<template>
  <div class="mb-4">
    <h3 class="text-2xl mb-2">Experience</h3>
    <div class="grid grid-cols-8 gap-4 mb-4">
      <div class="col-span-4">
        <label class="block mb-2" for="companyName">Company Name</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="companyName"
          type="text"
          v-model="experience.companyName"
        />
      </div>
      <div class="col-span-4">
        <label class="block mb-2" for="companyAdress">Company Adress</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="companyAdress"
          type="text"
          v-model="experience.companyAdress"
        />
      </div>
      <div class="col-span-4">
        <label class="block mb-2" for="title">Title</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="title"
          type="text"
          v-model="experience.title"
        />
      </div>
      <div class="col-span-2">
        <label class="block mb-2" for="dateStart">First Day</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="dateStart"
          type="date"
          v-model="experience.dateStart"
        />
      </div>
      <div class="col-span-2">
        <label class="block mb-2" for="dateEnd">Last Day</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="dateEnd"
          type="date"
          v-model="experience.dateEnd"
        />
        <span class="text-xs italic text-slate-600"
          >Leave last day empty if you still work in this company</span
        >
      </div>
      <div class="col-span-8">
        <label class="block mb-2" for="jobDescription">Job Description</label>
        <div class="flex">
          <textarea
            rows="4"
            class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
            id="jobDescription"
            type="text"
            v-model="jobDescription"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <button
        @click="addJobDescriptions"
        class="bg-sky-600 hover:bg-sky-400 rounded text-white py-2 px-4 mr-4"
      >
        Add Job Description
      </button>
      <button
        @click="addExperiences"
        class="bg-green-600 hover:bg-green-400 rounded text-white py-2 px-4"
      >
        Add Experience
      </button>
    </div>
    <div
      class="mb-2"
      v-for="(jobDescription, index) in experience.jobDescriptions"
      :key="jobDescription"
    >
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-2 cursor-pointer"
          @click="removeJobDescriptions(index)"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{{ jobDescription }}</span>
      </div>
    </div>
    <br />
    <div
      class="mb-2"
      v-for="(experience, index) in experiences"
      :key="experience.companyName"
    >
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-2 cursor-pointer"
          @click="removeExperiences(index)"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div>
          <hr />
          <strong>{{ experience.companyName }},</strong>
          {{ experience.companyAdress }}
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobDescription: "",
      experience: {
        companyName: "",
        companyAdress: "",
        title: "",
        dateStart: "",
        dateEnd: "",
        jobDescriptions: [],
      },
      experiences: [],
    };
  },
  methods: {
    addJobDescriptions() {
      this.experience.jobDescriptions.push(this.jobDescription);
      this.jobDescription = "";
    },
    removeJobDescriptions(index) {
      this.experience.jobDescriptions.splice(index, 1);
    },
    addExperiences() {
      const newDateStart = new Date(this.experience.dateStart);
      const monthDateStart = newDateStart.getMonth() + 1;
      const yearDateStart = newDateStart.getFullYear();
      this.experience.dateStart = `${monthDateStart}/${yearDateStart}`;

      const newDateEnd = new Date(this.experience.dateEnd);
      const monthDateEnd = newDateEnd.getMonth() + 1;
      const yearDateEnd = newDateEnd.getFullYear();
      this.experience.dateEnd = `${monthDateEnd}/${yearDateEnd}`;

      this.experiences.push(this.experience);
      this.experience = {
        companyName: "",
        companyAdress: "",
        title: "",
        dateStart: "",
        dateEnd: "",
        jobDescriptions: [],
      };
    },
    removeExperiences(index) {
      this.experiences.splice(index, 1);
    },
  },
};
</script>

<style></style>
