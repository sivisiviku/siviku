<template>
  <div class="mb-4">
    <div class="grid grid-cols-8 gap-4 mb-4">
      <div class="col-span-5">
        <label class="block mb-2" for="certification">Certification</label>
        <div class="flex">
          <input
            class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none mr-4"
            :class="{
              'border-2': getCertificationsValidation === false,
              'border-red-600': getCertificationsValidation === false,
            }"
            id="certification"
            type="text"
            v-model="certification"
          />
          <button
            @click="addCertifications"
            class="bg-sky-600 hover:bg-sky-400 rounded text-white w-20"
          >
            Add
          </button>
        </div>
        <span
          v-if="getCertificationsValidation === false"
          class="text-xs italic text-red-600"
          >Certification can not be empty</span
        >
      </div>
    </div>
    <div
      class="mb-2"
      v-for="(certification, index) in getCertifications"
      :key="certification"
    >
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-2 cursor-pointer"
          @click="updateCertifications({ value: index, isDelete: true })"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <strong>{{ certification }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      certification: "",
    };
  },
  computed: mapGetters(["getCertifications", "getCertificationsValidation"]),
  methods: {
    ...mapActions(["updateCertifications", "updateCertificationsValidation"]),
    addCertifications() {
      this.updateCertifications({ value: this.certification, isDelete: false });
      this.updateCertificationsValidation(true);
      this.certification = "";
    },
  },
};
</script>

<style></style>
