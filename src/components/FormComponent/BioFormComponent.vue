<template>
  <div class="mb-4">
    <label class="block mb-2" for="firstName">First Name</label>
    <input
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      id="firstName"
      type="text"
      v-model="firstName"
    />
  </div>
  <div class="mb-4">
    <label class="block mb-2" for="lastName">Last Name</label>
    <input
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      id="lastName"
      type="text"
      v-model="lastName"
    />
  </div>
  <div class="mb-4">
    <label class="block mb-2" for="photo">Photo</label>
    <img :src="photoPreview" width="300" />
    <input
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      id="photo"
      type="file"
      accept="image/*"
      @change="inputFile"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      photo: "",
      photoPreview: "",
      photoUpload: "",
    };
  },
  watch: {
    firstName(newFirstName) {
      console.log(newFirstName);
    },
    lastName(newLastName) {
      console.log(newLastName);
    },
    photoUpload(newPhotoUpload) {
      console.log(newPhotoUpload);
    },
  },
  methods: {
    inputFile(event) {
      this.photoUpload = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.photoPreview = fileReader.result;
      });
      fileReader.readAsDataURL(this.photoUpload);
    },
  },
};
</script>

<style></style>
