<template>
  <div class="mb-4">
    <label class="block mb-2" for="summary">Summary</label>
    <textarea
      rows="4"
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      id="summary"
      type="text"
      v-model="summary"
    ></textarea>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      summary: "",
    };
  },
  watch: {
    summary(newSummary) {
      this.updateSummary(newSummary);
    },
  },
  methods: {
    ...mapActions(["updateSummary"]),
  },
};
</script>

<style></style>
