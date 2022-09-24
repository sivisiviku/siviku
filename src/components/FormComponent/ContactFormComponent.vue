<template>
  <div class="mb-4">
    <label class="block mb-2" for="address">Address</label>
    <input
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      id="address"
      type="text"
      v-model="address"
    />
  </div>
  <div class="mb-4">
    <label class="block mb-2" for="phone">Phone</label>
    <input
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      id="phone"
      type="text"
      v-model="phone"
    />
  </div>
  <div class="mb-4">
    <label class="block mb-2" for="email">Email</label>
    <input
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      id="email"
      type="email"
      v-model="email"
    />
  </div>
  <div class="mb-4">
    <label class="block mb-2" for="linkedin">LinkedIn</label>
    <input
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      id="linkedin"
      type="text"
      v-model="linkedin"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      address: "",
      phone: "",
      email: "",
      linkedin: "",
    };
  },
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
