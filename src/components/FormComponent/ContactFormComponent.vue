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
      console.log(newAddress);
    },
    phone(newPhone) {
      console.log(newPhone);
    },
    email(newEmail) {
      console.log(newEmail);
    },
    linkedin(newLinkedin) {
      console.log(newLinkedin);
    },
  },
};
</script>

<style></style>
