<template>
  <div class="grid grid-cols-3 gap-8 m-10">
    <div class="bg-slate-100 p-5 rounded-lg shadow-lg">
      <label for="fullName">Full Name</label>
      <input type="text" v-model="form.fullname" />
      <!-- upload image here -->
      <label for="fullName">Address</label>
      <input type="text" v-model="form.contact.address" />
      <label for="fullName">Email</label>
      <input type="text" v-model="form.contact.email" />
      <label for="fullName">LinkedIn</label>
      <input type="text" v-model="form.contact.linkedin" />
      <label for="fullName">Languages</label>
      <input type="text" v-model="form.languages" />
    </div>
    <div class="col-span-2 bg-zinc-100 p-5 rounded-lg shadow-lg"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        fullname: "",
        contact: {
          address: "",
          email: "",
          linkedin: "",
        },
        languages: [],
      },
    };
  },
};
</script>

<style></style>
