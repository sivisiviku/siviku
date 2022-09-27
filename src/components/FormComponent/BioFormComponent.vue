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
      :class="{ 'border-2': isError, 'border-red-600': isError }"
      id="photo"
      type="file"
      accept="image/*"
      @change="inputFile"
    />
    <span v-if="isError" class="text-xs italic text-red-600">{{
      errorMessage
    }}</span>
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
      isError: false,
      errorMessage: "",
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
      const file = event.target.files[0];
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      const fileReader = new FileReader();
      if (!allowedTypes.includes(file.type)) {
        this.updatePhotoUpload("");
        this.updatePhotoPreview("");
        this.isError = true;
        this.errorMessage = "Only images are allowed";
      } else if (file.size > 200000) {
        this.updatePhotoUpload("");
        this.updatePhotoPreview("");
        this.isError = true;
        this.errorMessage = "Max file size is 200Kb";
      } else {
        this.updatePhotoUpload(file);
        fileReader.addEventListener("load", () => {
          this.updatePhotoPreview(fileReader.result);
        });
        this.isError = false;
        this.errorMessage = "";
      }

      try {
        fileReader.readAsDataURL(this.getPhotoUpload);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style></style>
