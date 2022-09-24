<template>
  <div class="mb-4">
    <label class="block mb-2" for="languages">Languages</label>
    <input
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      id="languages"
      type="text"
      v-model="languages"
    />
    <span class="text-xs italic text-slate-600"
      >Separate with comma if more than one</span
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      languages: "",
    };
  },
  watch: {
    languages(newLanguages) {
      const languages = newLanguages
        .split(",")
        .map((language) => language.trim());

      this.updateLanguages(languages);
    },
  },
  methods: {
    ...mapActions(["updateLanguages"]),
  },
};
</script>

<style></style>
