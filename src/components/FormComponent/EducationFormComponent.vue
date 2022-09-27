<template>
  <div class="mb-4">
    <h3 class="text-2xl mb-2">Education</h3>
    <div class="grid grid-cols-8 gap-4 mb-4">
      <div class="col-span-4">
        <label class="block mb-2" for="schoolName">School Name</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="schoolName"
          type="text"
          v-model="education.schoolName"
        />
      </div>
      <div class="col-span-4">
        <label class="block mb-2" for="schoolAddress">School Address</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="schoolAddress"
          type="text"
          v-model="education.schoolAddress"
        />
      </div>
      <div class="col-span-4">
        <label class="block mb-2" for="major">Major</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="major"
          type="text"
          v-model="education.major"
        />
      </div>
      <div class="col-span-4">
        <label class="block mb-2" for="degree">Degree</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="degree"
          type="text"
          v-model="education.degree"
        />
      </div>
      <div class="col-span-3">
        <label class="block mb-2" for="dateGraduated">Date Graduated</label>
        <div class="flex">
          <input
            class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none w-40 mr-4"
            id="dateGraduated"
            type="date"
            v-model="education.dateGraduated"
          />
          <button
            @click="addEducations"
            class="bg-sky-600 hover:bg-sky-400 rounded text-white py-2 px-4"
          >
            Add
          </button>
        </div>
      </div>
    </div>
    <div
      class="mb-2"
      v-for="(education, index) in getEducations"
      :key="education.schoolName"
    >
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-2 cursor-pointer"
          @click="updateEducations({ value: index, isDelete: true })"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div>
          <hr />
          <strong>{{ education.schoolName }},</strong>
          {{ education.schoolAddress }}
          <br />
          <strong>{{ education.degree }}</strong> in {{ education.major }} -
          {{ formatDate(education.dateGraduated) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      education: {
        schoolName: "",
        schoolAddress: "",
        major: "",
        degree: "",
        dateGraduated: "",
      },
    };
  },
  computed: mapGetters(["getEducations"]),
  methods: {
    ...mapActions(["updateEducations"]),
    addEducations() {
      this.updateEducations({ value: this.education, isDelete: false });
      this.education = {
        schoolName: "",
        schoolAddress: "",
        major: "",
        degree: "",
        dateGraduated: "",
      };
    },
    formatDate(date) {
      const newDate = new Date(date);
      return newDate.getFullYear();
    },
  },
};
</script>

<style></style>
