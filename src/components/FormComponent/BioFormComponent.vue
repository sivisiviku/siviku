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
    <label class="block mb-2" for="occupation">Occupation</label>
    <input
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      id="occupation"
      type="text"
      v-model="occupation"
    />
  </div>
  <div class="mb-4">
    <label class="block mb-2" for="photo">Photo</label>
    <img :src="getPhotoPreview" width="300" />
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
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      occupation: "",
    };
  },
  computed: mapGetters(["getPhotoPreview", "getPhotoUpload"]),
  watch: {
    firstName(newFirstName) {
      this.updateFirstName(newFirstName);
    },
    lastName(newLastName) {
      this.updateLastName(newLastName);
    },
    occupation(newOccupation) {
      this.updateOccupation(newOccupation);
    },
  },
  methods: {
    ...mapActions([
      "updateFirstName",
      "updateLastName",
      "updateOccupation",
      "updatePhotoUpload",
      "updatePhotoPreview",
    ]),
    inputFile(event) {
      this.updatePhotoUpload(event.target.files[0]);
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.updatePhotoPreview(fileReader.result);
      });
      fileReader.readAsDataURL(this.getPhotoUpload);
    },
  },
};
</script>

<style></style>
