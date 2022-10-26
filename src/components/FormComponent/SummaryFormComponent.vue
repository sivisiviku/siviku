<template>
  <div class="mb-4">
    <label class="block mb-2" for="summary">Summary</label>
    <textarea
      rows="4"
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      :class="{
        'border-2': getSummaryValidation === false,
        'border-red-600': getSummaryValidation === false,
      }"
      id="summary"
      type="text"
      v-model="summary"
    ></textarea>
    <span
      v-if="getSummaryValidation === false"
      class="text-xs italic text-red-600"
      >Summary can not be empty</span
    >
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
  computed: mapGetters(["getSummaryValidation"]),
  methods: {
    ...mapActions(["updateSummary", "updateSummaryValidation"]),
  },
};
</script>

<style></style>
