<template>
  <div class="flex justify-between pt-5 px-5">
    <div class="flex justify-between ml-5 py-2 text-xl w-24">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          />
        </svg>
      </div>
      <div>
        <strong>Siviku</strong>
      </div>
    </div>
    <div v-if="getAnyDataExist">
      <router-link v-if="getCurrentPage === 'create'" :to="{ name: 'home' }">
        <button
          class="bg-transparent text-sky-600 border border-sky-600 hover:border-transparent hover:bg-sky-600 mx-5 px-5 py-2 w-24 hover:text-white font-semibold rounded-full"
        >
          View
        </button>
      </router-link>
      <router-link v-if="getCurrentPage === 'home'" :to="{ name: 'create' }">
        <button
          class="bg-transparent text-green-600 border border-green-600 hover:border-transparent hover:bg-green-600 mx-5 px-5 py-2 w-24 hover:text-white font-semibold rounded-full"
        >
          Edit
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getAnyDataExist", "getCurrentPage"]),
};
</script>

<style lang="scss" scoped></style>
