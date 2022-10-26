<template>
  <div class="mb-4">
    <label class="block mb-2" for="firstName">First Name</label>
    <input
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      :class="{
        'border-2': getFirstNameValidation === false,
        'border-red-600': getFirstNameValidation === false,
      }"
      id="firstName"
      type="text"
      v-model="firstName"
    />
    <span
      v-if="getFirstNameValidation === false"
      class="text-xs italic text-red-600"
      >First Name can not be empty</span
    >
  </div>
  <div class="mb-4">
    <label class="block mb-2" for="lastName">Last Name</label>
    <input
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      :class="{
        'border-2': getLastNameValidation === false,
        'border-red-600': getLastNameValidation === false,
      }"
      id="lastName"
      type="text"
      v-model="lastName"
    />
    <span
      v-if="getFirstNameValidation === false"
      class="text-xs italic text-red-600"
      >Last Name can not be empty</span
    >
  </div>
  <div class="mb-4">
    <label class="block mb-2" for="occupation">Occupation</label>
    <input
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      :class="{
        'border-2': getOccupationValidation === false,
        'border-red-600': getOccupationValidation === false,
      }"
      id="occupation"
      type="text"
      v-model="occupation"
    />
    <span
      v-if="getFirstNameValidation === false"
      class="text-xs italic text-red-600"
      >Occupation can not be empty</span
    >
  </div>
  <div class="mb-4">
    <label class="block mb-2" for="photo">Photo</label>
    <img :src="getPhotoPreview" width="300" />
    <input
      class="shadow rounded w-full py-2 px-3 leading-tight focus:outline-none"
      :class="{
        'border-2': getPhotoUploadValidation === false,
        'border-red-600': getPhotoUploadValidation === false,
      }"
      id="photo"
      type="file"
      accept="image/*"
      @change="inputFile"
    />
    <span
      v-if="getPhotoUploadValidation === false"
      class="text-xs italic text-red-600"
      >{{ getPhotoUploadValidationMessage }}</span
    >
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
  computed: mapGetters([
    "getPhotoPreview",
    "getPhotoUpload",
    "getFirstNameValidation",
    "getLastNameValidation",
    "getOccupationValidation",
    "getPhotoUploadValidation",
    "getPhotoUploadValidationMessage",
  ]),
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
      "updatePhotoUploadValidation",
      "updatePhotoUploadValidationMessage",
    ]),
    inputFile(event) {
      const file = event.target.files[0];
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      const fileReader = new FileReader();
      if (!allowedTypes.includes(file.type)) {
        this.updatePhotoUpload("");
        this.updatePhotoPreview("");
        this.updatePhotoUploadValidation(false);
        this.updatePhotoUploadValidationMessage("Only images are allowed");
      } else if (file.size > 200000) {
        this.updatePhotoUpload("");
        this.updatePhotoPreview("");
        this.updatePhotoUploadValidation(false);
        this.updatePhotoUploadValidationMessage("Max file size is 200Kb");
      } else {
        this.updatePhotoUpload(file);
        fileReader.addEventListener("load", () => {
          this.updatePhotoPreview(fileReader.result);
        });
        this.updatePhotoUploadValidation(true);
        this.updatePhotoUploadValidationMessage("");
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
