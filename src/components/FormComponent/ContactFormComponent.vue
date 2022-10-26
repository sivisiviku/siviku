<template>
  <div class="mb-4">
    <label class="block mb-2" for="address">Address</label>
    <input
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      :class="{
        'border-2': getAddressValidation === false,
        'border-red-600': getAddressValidation === false,
      }"
      id="address"
      type="text"
      v-model="address"
    />
    <span
      v-if="getAddressValidation === false"
      class="text-xs italic text-red-600"
      >Address can not be empty</span
    >
  </div>
  <div class="mb-4">
    <label class="block mb-2" for="phone">Phone</label>
    <input
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      :class="{
        'border-2': getPhoneValidation === false,
        'border-red-600': getPhoneValidation === false,
      }"
      id="phone"
      type="text"
      v-model="phone"
    />
    <span
      v-if="getPhoneValidation === false"
      class="text-xs italic text-red-600"
      >Phone can not be empty</span
    >
  </div>
  <div class="mb-4">
    <label class="block mb-2" for="email">Email</label>
    <input
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      :class="{
        'border-2': getEmailValidation === false,
        'border-red-600': getEmailValidation === false,
      }"
      id="email"
      type="email"
      v-model="email"
    />
    <span
      v-if="getEmailValidation === false"
      class="text-xs italic text-red-600"
      >Email can not be empty</span
    >
  </div>
  <div class="mb-4">
    <label class="block mb-2" for="linkedin">LinkedIn</label>
    <input
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      :class="{
        'border-2': getLinkedinValidation === false,
        'border-red-600': getLinkedinValidation === false,
      }"
      id="linkedin"
      type="text"
      v-model="linkedin"
    />
    <span
      v-if="getLinkedinValidation === false"
      class="text-xs italic text-red-600"
      >LinkedIn can not be empty</span
    >
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      address: "",
      phone: "",
      email: "",
      linkedin: "",
    };
  },
  computed: mapGetters([
    "getAddressValidation",
    "getPhoneValidation",
    "getEmailValidation",
    "getLinkedinValidation",
  ]),
  watch: {
    address(newAddress) {
      this.updateAddress(newAddress);
    },
    phone(newPhone) {
      this.updatePhone(newPhone);
    },
    email(newEmail) {
      this.updateEmail(newEmail);
    },
    linkedin(newLinkedin) {
      this.updateLinkedin(newLinkedin);
    },
  },
  methods: {
    ...mapActions([
      "updateAddress",
      "updatePhone",
      "updateEmail",
      "updateLinkedin",
    ]),
  },
};
</script>

<style></style>
