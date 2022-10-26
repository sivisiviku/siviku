<template>
  <div class="mb-4">
    <h3 class="text-2xl mb-2">Education</h3>
    <div class="grid grid-cols-8 gap-4 mb-4">
      <div class="col-span-4">
        <label class="block mb-2" for="schoolName">School Name</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          :class="{
            'border-2':
              getEducationsValidation === false ||
              validation.schoolName.isValid === false,
            'border-red-600':
              getEducationsValidation === false ||
              validation.schoolName.isValid === false,
          }"
          id="schoolName"
          type="text"
          v-model="education.schoolName"
        />
        <span
          v-if="validation.schoolName.isValid === false"
          class="text-xs italic text-red-600"
          >School Name can not be empty</span
        >
      </div>
      <div class="col-span-4">
        <label class="block mb-2" for="schoolAddress">School Address</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          :class="{
            'border-2':
              getEducationsValidation === false ||
              validation.schoolAddress.isValid === false,
            'border-red-600':
              getEducationsValidation === false ||
              validation.schoolAddress.isValid === false,
          }"
          id="schoolAddress"
          type="text"
          v-model="education.schoolAddress"
        />
        <span
          v-if="validation.schoolAddress.isValid === false"
          class="text-xs italic text-red-600"
          >School Address can not be empty</span
        >
      </div>
      <div class="col-span-4">
        <label class="block mb-2" for="major">Major</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          :class="{
            'border-2':
              getEducationsValidation === false ||
              validation.major.isValid === false,
            'border-red-600':
              getEducationsValidation === false ||
              validation.major.isValid === false,
          }"
          id="major"
          type="text"
          v-model="education.major"
        />
        <span
          v-if="validation.major.isValid === false"
          class="text-xs italic text-red-600"
          >Major can not be empty</span
        >
      </div>
      <div class="col-span-4">
        <label class="block mb-2" for="degree">Degree</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          :class="{
            'border-2':
              getEducationsValidation === false ||
              validation.degree.isValid === false,
            'border-red-600':
              getEducationsValidation === false ||
              validation.degree.isValid === false,
          }"
          id="degree"
          type="text"
          v-model="education.degree"
        />
        <span
          v-if="validation.degree.isValid === false"
          class="text-xs italic text-red-600"
          >Degree can not be empty</span
        >
      </div>
      <div class="col-span-3">
        <label class="block mb-2" for="dateGraduated">Date Graduated</label>
        <div class="flex">
          <input
            class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none w-40 mr-4"
            :class="{
              'border-2':
                getEducationsValidation === false ||
                validation.dateGraduated.isValid === false,
              'border-red-600':
                getEducationsValidation === false ||
                validation.dateGraduated.isValid === false,
            }"
            id="dateGraduated"
            type="date"
            v-model="education.dateGraduated"
          /><br />
          <button
            @click="addEducations"
            class="bg-sky-600 hover:bg-sky-400 rounded text-white py-2 px-4"
          >
            Add
          </button>
        </div>
        <span
          v-if="validation.dateGraduated.isValid === false"
          class="text-xs italic text-red-600"
          >Date Graduated can not be empty</span
        >
        <span
          v-else-if="getEducationsValidation === false"
          class="text-xs italic text-red-600"
          >Education can not be empty</span
        >
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
      validation: {
        schoolName: {
          isValid: true,
          message: "",
        },
        schoolAddress: {
          isValid: true,
          message: "",
        },
        major: {
          isValid: true,
          message: "",
        },
        degree: {
          isValid: true,
          message: "",
        },
        dateGraduated: {
          isValid: true,
          message: "",
        },
      },
    };
  },
  computed: mapGetters(["getEducations", "getEducationsValidation"]),
  methods: {
    ...mapActions(["updateEducations", "updateEducationsValidation"]),
    addEducations() {
      let isValid = true;

      if (this.education.schoolName === "") {
        this.validation.schoolName.isValid = false;
        this.validation.schoolName.message = "School Name can not be empty";
        isValid = false;
      } else {
        this.validation.schoolName.isValid = true;
        this.validation.schoolName.message = "";
      }

      if (this.education.schoolAddress === "") {
        this.validation.schoolAddress.isValid = false;
        this.validation.schoolAddress.message =
          "School Address can not be empty";
        isValid = false;
      } else {
        this.validation.schoolAddress.isValid = true;
        this.validation.schoolAddress.message = "";
      }

      if (this.education.major === "") {
        this.validation.major.isValid = false;
        this.validation.major.message = "Major can not be empty";
        isValid = false;
      } else {
        this.validation.major.isValid = true;
        this.validation.major.message = "";
      }

      if (this.education.degree === "") {
        this.validation.degree.isValid = false;
        this.validation.degree.message = "Degree can not be empty";
        isValid = false;
      } else {
        this.validation.degree.isValid = true;
        this.validation.degree.message = "";
      }

      if (this.education.dateGraduated === "") {
        this.validation.dateGraduated.isValid = false;
        this.validation.dateGraduated.message =
          "Date Graduated can not be empty";
        isValid = false;
      } else {
        this.validation.dateGraduated.isValid = true;
        this.validation.dateGraduated.message = "";
      }

      if (isValid === false) {
        return;
      }

      this.updateEducations({ value: this.education, isDelete: false });
      this.updateEducationsValidation(true);
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
