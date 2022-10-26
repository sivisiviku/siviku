<template>
  <div class="mb-4">
    <h3 class="text-2xl mb-2">Experience</h3>
    <div class="grid grid-cols-8 gap-4 mb-4">
      <div class="col-span-4">
        <label class="block mb-2" for="companyName">Company Name</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          :class="{
            'border-2':
              getExperiencesValidation === false ||
              validation.companyName.isValid === false,
            'border-red-600':
              getExperiencesValidation === false ||
              validation.companyName.isValid === false,
          }"
          id="companyName"
          type="text"
          v-model="experience.companyName"
        />
        <span
          v-if="validation.companyName.isValid === false"
          class="text-xs italic text-red-600"
          >Company Name can not be empty</span
        >
      </div>
      <div class="col-span-4">
        <label class="block mb-2" for="companyAddress">Company Address</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          :class="{
            'border-2':
              getExperiencesValidation === false ||
              validation.companyAddress.isValid === false,
            'border-red-600':
              getExperiencesValidation === false ||
              validation.companyAddress.isValid === false,
          }"
          id="companyAddress"
          type="text"
          v-model="experience.companyAddress"
        />
        <span
          v-if="validation.companyAddress.isValid === false"
          class="text-xs italic text-red-600"
          >Company Address can not be empty</span
        >
      </div>
      <div class="col-span-4">
        <label class="block mb-2" for="title">Title</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          :class="{
            'border-2':
              getExperiencesValidation === false ||
              validation.title.isValid === false,
            'border-red-600':
              getExperiencesValidation === false ||
              validation.title.isValid === false,
          }"
          id="title"
          type="text"
          v-model="experience.title"
        />
        <span
          v-if="validation.title.isValid === false"
          class="text-xs italic text-red-600"
          >Title can not be empty</span
        >
      </div>
      <div class="col-span-2">
        <label class="block mb-2" for="dateStart">First Day</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          :class="{
            'border-2':
              getExperiencesValidation === false ||
              validation.dateStart.isValid === false,
            'border-red-600':
              getExperiencesValidation === false ||
              validation.dateStart.isValid === false,
          }"
          id="dateStart"
          type="date"
          v-model="experience.dateStart"
        />
        <span
          v-if="validation.dateStart.isValid === false"
          class="text-xs italic text-red-600"
          >Date Start can not be empty</span
        >
      </div>
      <div class="col-span-2">
        <label class="block mb-2" for="dateEnd">Last Day</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          :class="{
            'border-2':
              getExperiencesValidation === false ||
              validation.dateEnd.isValid === false,
            'border-red-600':
              getExperiencesValidation === false ||
              validation.dateEnd.isValid === false,
          }"
          id="dateEnd"
          type="date"
          v-model="experience.dateEnd"
        />
        <span class="text-xs italic text-slate-600"
          >Leave last day empty if you still work in this company</span
        ><br />
        <span
          v-if="validation.dateEnd.isValid === false"
          class="text-xs italic text-red-600"
          >Date End can not be empty</span
        >
      </div>
      <div class="col-span-8">
        <label class="block mb-2" for="jobDescription">Job Description</label>
        <div class="flex">
          <textarea
            rows="4"
            class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
            :class="{
              'border-2':
                getExperiencesValidation === false ||
                validation.jobDescriptions.isValid === false,
              'border-red-600':
                getExperiencesValidation === false ||
                validation.jobDescriptions.isValid === false,
            }"
            id="jobDescription"
            type="text"
            v-model="jobDescription"
          ></textarea>
        </div>
        <span
          v-if="validation.jobDescriptions.isValid === false"
          class="text-xs italic text-red-600"
          >Job Description can not be empty</span
        >
        <span
          v-else-if="getExperiencesValidation === false"
          class="text-xs italic text-red-600"
          >Experience can not be empty</span
        >
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
      v-for="(experience, index) in getExperiences"
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
          @click="updateExperiences({ value: index, isDelete: true })"
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
          {{ experience.companyAddress }}
          <br />
          <strong>{{ experience.title }}</strong> ({{
            formatDate(experience.dateStart)
          }}
          - {{ formatDate(experience.dateEnd) }})
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
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      jobDescription: "",
      experience: {
        companyName: "",
        companyAddress: "",
        title: "",
        dateStart: "",
        dateEnd: "",
        jobDescriptions: [],
      },
      validation: {
        companyName: {
          isValid: true,
          message: "",
        },
        companyAddress: {
          isValid: true,
          message: "",
        },
        title: {
          isValid: true,
          message: "",
        },
        dateStart: {
          isValid: true,
          message: "",
        },
        dateEnd: {
          isValid: true,
          message: "",
        },
        jobDescriptions: {
          isValid: true,
          message: "",
        },
      },
    };
  },
  computed: mapGetters(["getExperiences", "getExperiencesValidation"]),
  methods: {
    ...mapActions(["updateExperiences", "updateExperiencesValidation"]),
    addJobDescriptions() {
      if (this.jobDescription === "") {
        this.validation.jobDescriptions.isValid = false;
        this.validation.jobDescriptions.message =
          "Job Description can not be empty";
        return;
      } else {
        this.validation.jobDescriptions.isValid = true;
        this.validation.jobDescriptions.message = "";
      }
      this.experience.jobDescriptions.push(this.jobDescription);
      this.jobDescription = "";
    },
    removeJobDescriptions(index) {
      this.experience.jobDescriptions.splice(index, 1);
    },
    addExperiences() {
      let isValid = true;

      if (this.experience.companyName === "") {
        this.validation.companyName.isValid = false;
        this.validation.companyName.message = "Company Name can not be empty";
        isValid = false;
      } else {
        this.validation.companyName.isValid = true;
        this.validation.companyName.message = "";
      }

      if (this.experience.companyAddress === "") {
        this.validation.companyAddress.isValid = false;
        this.validation.companyAddress.message =
          "Company Address can not be empty";
        isValid = false;
      } else {
        this.validation.companyAddress.isValid = true;
        this.validation.companyAddress.message = "";
      }

      if (this.experience.title === "") {
        this.validation.title.isValid = false;
        this.validation.title.message = "Title can not be empty";
        isValid = false;
      } else {
        this.validation.title.isValid = true;
        this.validation.title.message = "";
      }

      if (this.experience.dateStart === "") {
        this.validation.dateStart.isValid = false;
        this.validation.dateStart.message = "Date Start can not be empty";
        isValid = false;
      } else {
        this.validation.dateStart.isValid = true;
        this.validation.dateStart.message = "";
      }

      if (this.experience.dateEnd === "") {
        this.validation.dateEnd.isValid = false;
        this.validation.dateEnd.message = "Date End can not be empty";
        isValid = false;
      } else {
        this.validation.dateEnd.isValid = true;
        this.validation.dateEnd.message = "";
      }

      if (this.experience.jobDescriptions.length === 0) {
        this.validation.jobDescriptions.isValid = false;
        this.validation.jobDescriptions.message =
          "Job Description can not be empty";
        isValid = false;
      } else {
        this.validation.jobDescriptions.isValid = true;
        this.validation.jobDescriptions.message = "";
      }

      if (isValid === false) {
        return;
      }

      this.updateExperiences({ value: this.experience, isDelete: false });
      this.updateExperiencesValidation(true);
      this.experience = {
        companyName: "",
        companyAddress: "",
        title: "",
        dateStart: "",
        dateEnd: "",
        jobDescriptions: [],
      };
    },
    formatDate(date) {
      const newDate = new Date(date);
      const monthDate = newDate.getMonth() + 1;
      const yearDate = newDate.getFullYear();
      return `${monthDate}/${yearDate}`;
    },
  },
};
</script>

<style></style>
