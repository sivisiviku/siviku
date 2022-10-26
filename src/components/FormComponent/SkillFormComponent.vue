<template>
  <div class="mb-4">
    <div class="grid grid-cols-8 gap-4">
      <div class="col-span-4">
        <label class="block mb-2" for="skill">Skill</label>
        <input
          class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
          :class="{
            'border-2':
              getSkillsValidation === false ||
              validation.name.isValid === false,
            'border-red-600':
              getSkillsValidation === false ||
              validation.name.isValid === false,
          }"
          id="skill"
          type="text"
          v-model="skill.name"
        />
        <span
          v-if="
            getSkillsValidation === false || validation.name.isValid === false
          "
          class="text-xs italic text-red-600"
          >Skill can not be empty</span
        >
      </div>
      <div class="col-span-2">
        <label class="block mb-2" for="level">Level</label>
        <div class="flex">
          <input
            class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none w-1/2 mr-4"
            :class="{
              'border-2':
                getSkillsValidation === false ||
                validation.level.isValid === false,
              'border-red-600':
                getSkillsValidation === false ||
                validation.level.isValid === false,
            }"
            id="level"
            type="number"
            v-model="skill.level"
          />
          <button
            @click="addSkills"
            class="bg-sky-600 hover:bg-sky-400 rounded text-white w-20"
          >
            Add
          </button>
        </div>
        <span
          v-if="validation.level.isValid === false"
          class="text-xs italic text-red-600"
          >{{ validation.level.message }}</span
        >
        <span v-else class="text-xs italic text-slate-600">From 0 to 10</span>
      </div>
    </div>
    <div class="mb-2" v-for="(skill, index) in getSkills" :key="skill.name">
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-2 cursor-pointer"
          @click="updateSkills({ value: index, isDelete: true })"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div>
          <strong>{{ skill.name }}</strong> ({{ skill.level }}/10)
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
      skill: {
        name: "",
        level: 0,
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
  computed: mapGetters(["getSkills", "getSkillsValidation"]),
  methods: {
    ...mapActions(["updateSkills", "updateSkillsValidation"]),
    addSkills() {
      let isValid = true;

      if (this.skill.name === "") {
        this.validation.name.isValid = false;
        isValid = false;
      } else {
        this.validation.name.isValid = true;
      }

      if (this.skill.level < 1 || this.skill.level > 10) {
        this.validation.level.isValid = false;
        this.validation.level.message = "Level must be between 1 and 10";
        isValid = false;
      } else {
        this.validation.level.isValid = true;
        this.validation.level.message = "";
      }

      if (isValid === false) {
        return;
      }

      if (this.skill.level < 1) this.skill.level = 1;
      if (this.skill.level > 10) this.skill.level = 10;
      this.updateSkills({ value: this.skill, isDelete: false });
      this.updateSkillsValidation(true);
      this.skill = {
        name: "",
        level: 0,
      };
    },
  },
};
</script>

<style></style>
