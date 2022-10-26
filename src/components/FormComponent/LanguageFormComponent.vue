<template>
  <div class="mb-4">
    <div class="grid grid-cols-8 gap-4 mb-4">
      <div class="col-span-4">
        <label class="block mb-2" for="language">Language</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          :class="{
            'border-2':
              getLanguagesValidation === false ||
              validation.name.isValid === false,
            'border-red-600':
              getLanguagesValidation === false ||
              validation.name.isValid === false,
          }"
          id="language"
          type="text"
          v-model="language.name"
        />
        <span
          v-if="
            getLanguagesValidation === false ||
            validation.name.isValid === false
          "
          class="text-xs italic text-red-600"
          >Language can not be empty</span
        >
      </div>
      <div class="col-span-4">
        <label class="block mb-2" for="level">Level</label>
        <div class="flex">
          <select
            class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none w-2/3 mr-4"
            :class="{
              'border-2':
                getLanguagesValidation === false ||
                validation.level.isValid === false,
              'border-red-600':
                getLanguagesValidation === false ||
                validation.level.isValid === false,
            }"
            id="level"
            v-model="language.level"
          >
            <option value="beginner" selected>Beginner</option>
            <option value="intermediate" selected>Intermediate</option>
            <option value="fluent" selected>Fluent</option>
            <option value="professional" selected>Professional</option>
            <option value="native" selected>Native</option>
          </select>
          <button
            @click="addLanguages"
            class="bg-sky-600 hover:bg-sky-400 rounded text-white w-1/3"
          >
            Add
          </button>
        </div>
        <span
          v-if="validation.level.isValid === false"
          class="text-xs italic text-red-600"
          >{{ validation.level.message }}</span
        >
      </div>
    </div>
    <div
      class="mb-2"
      v-for="(language, index) in getLanguages"
      :key="language.name"
    >
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-2 cursor-pointer"
          @click="updateLanguages({ value: index, isDelete: true })"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div>
          <strong>{{ language.name }}</strong> -
          {{ language.level.charAt(0).toUpperCase() + language.level.slice(1) }}
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
      language: {
        name: "",
        level: "",
      },
      validation: {
        name: {
          isValid: true,
        },
        level: {
          isValid: true,
          message: "",
        },
      },
    };
  },
  computed: mapGetters(["getLanguages", "getLanguagesValidation"]),
  methods: {
    ...mapActions(["updateLanguages", "updateLanguagesValidation"]),
    addLanguages() {
      let isValid = true;

      if (this.language.name === "") {
        this.validation.name.isValid = false;
        isValid = false;
      } else {
        this.validation.name.isValid = true;
      }

      if (this.language.level === "") {
        this.validation.level.isValid = false;
        this.validation.level.message = "Level can not be empty";
        isValid = false;
      } else {
        this.validation.level.isValid = true;
        this.validation.level.message = "";
      }

      if (isValid === false) {
        return;
      }

      this.updateLanguages({ value: this.language, isDelete: false });
      this.updateLanguagesValidation(true);
      this.language = {
        name: "",
        level: "",
      };
    },
  },
};
</script>

<style></style>
