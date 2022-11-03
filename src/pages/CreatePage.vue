<template>
  <div class="grid grid-cols-3 gap-8 m-10">
    <div class="bg-slate-100 p-5 rounded-lg shadow-lg">
      <BioFormComponent></BioFormComponent>
      <ContactFormComponent></ContactFormComponent>
      <LanguageFormComponent></LanguageFormComponent>
    </div>
    <div class="col-span-2 bg-zinc-100 p-5 rounded-lg shadow-lg">
      <SummaryFormComponent></SummaryFormComponent>
      <SkillFormComponent></SkillFormComponent>
      <ExperienceFormComponent></ExperienceFormComponent>
      <EducationForm></EducationForm>
      <CertificationFormComponent></CertificationFormComponent>
    </div>
  </div>
  <div class="flex justify-center mb-10">
    <button
      :disabled="isLoading"
      @click="save"
      class="bg-transparent text-green-600 border border-green-600 hover:border-transparent hover:bg-green-600 mx-5 px-5 py-2 w-32 hover:text-white font-semibold rounded-full"
    >
      <svg
        v-if="isLoading"
        class="inline mr-2 w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      Save
    </button>
  </div>
</template>

<script>
// import firebase from "firebase";
import BioFormComponent from "@/components/FormComponent/BioFormComponent.vue";
import CertificationFormComponent from "@/components/FormComponent/CertificationFormComponent.vue";
import ContactFormComponent from "@/components/FormComponent/ContactFormComponent.vue";
import EducationForm from "@/components/FormComponent/EducationFormComponent.vue";
import ExperienceFormComponent from "@/components/FormComponent/ExperienceFormComponent.vue";
import LanguageFormComponent from "@/components/FormComponent/LanguageFormComponent.vue";
import SkillFormComponent from "@/components/FormComponent/SkillFormComponent.vue";
import SummaryFormComponent from "@/components/FormComponent/SummaryFormComponent.vue";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    BioFormComponent,
    CertificationFormComponent,
    ContactFormComponent,
    EducationForm,
    ExperienceFormComponent,
    LanguageFormComponent,
    SkillFormComponent,
    SummaryFormComponent,
  },
  computed: {
    ...mapGetters([
      "getFirstName",
      "getLastName",
      "getOccupation",
      "getPhotoUpload",
      "getSummary",
      "getCertifications",
      "getAddress",
      "getPhone",
      "getEmail",
      "getLinkedin",
      "getEducations",
      "getExperiences",
      "getLanguages",
      "getSkills",
    ]),
  },
  methods: {
    ...mapActions([
      "updateFirstNameValidation",
      "updateLastNameValidation",
      "updateOccupationValidation",
      "updatePhotoUploadValidation",
      "updateAddressValidation",
      "updatePhoneValidation",
      "updateEmailValidation",
      "updateLinkedinValidation",
      "updateLanguagesValidation",
      "updateSummaryValidation",
      "updateSkillsValidation",
      "updateExperiencesValidation",
      "updateEducationsValidation",
      "updateCertificationsValidation",
      "updatePhotoUploadValidationMessage",
      "updateCurrentPage",
    ]),
    isValid() {
      let result = true;

      if (this.getFirstName === "") {
        this.updateFirstNameValidation(false);
        this.result = false;
      } else {
        this.updateFirstNameValidation(true);
        this.result = true;
      }

      if (this.getLastName === "") {
        this.updateLastNameValidation(false);
        result = false;
      } else {
        this.updateLastNameValidation(true);
        this.result = true;
      }

      if (this.getOccupation === "") {
        this.updateOccupationValidation(false);
        result = false;
      } else {
        this.updateOccupationValidation(true);
        this.result = true;
      }

      if (this.getPhotoUpload.name === undefined) {
        this.updatePhotoUploadValidation(false);
        this.updatePhotoUploadValidationMessage("Photo can not be empty");
        result = false;
      } else {
        this.updatePhotoUploadValidation(true);
        this.updatePhotoUploadValidationMessage("");
        this.result = true;
      }

      if (this.getAddress === "") {
        this.updateAddressValidation(false);
        result = false;
      } else {
        this.updateAddressValidation(true);
        this.result = true;
      }

      if (this.getPhone === "") {
        this.updatePhoneValidation(false);
        result = false;
      } else {
        this.updatePhoneValidation(true);
        this.result = true;
      }

      if (this.getEmail === "") {
        this.updateEmailValidation(false);
        result = false;
      } else {
        this.updateEmailValidation(true);
        this.result = true;
      }

      if (this.getLinkedin === "") {
        this.updateLinkedinValidation(false);
        result = false;
      } else {
        this.updateLinkedinValidation(true);
        this.result = true;
      }

      if (this.getLanguages.length === 0) {
        this.updateLanguagesValidation(false);
        result = false;
      } else {
        this.updateLanguagesValidation(true);
        this.result = true;
      }

      if (this.getSummary === "") {
        this.updateSummaryValidation(false);
        result = false;
      } else {
        this.updateSummaryValidation(true);
        this.result = true;
      }

      if (this.getSkills.length === 0) {
        this.updateSkillsValidation(false);
        result = false;
      } else {
        this.updateSkillsValidation(true);
        this.result = true;
      }

      if (this.getExperiences.length === 0) {
        this.updateExperiencesValidation(false);
        result = false;
      } else {
        this.updateExperiencesValidation(true);
        this.result = true;
      }

      if (this.getEducations.length === 0) {
        this.updateEducationsValidation(false);
        result = false;
      } else {
        this.updateEducationsValidation(true);
        this.result = true;
      }

      if (this.getCertifications.length === 0) {
        this.updateCertificationsValidation(false);
        result = false;
      } else {
        this.updateCertificationsValidation(true);
        this.result = true;
      }

      return result;
    },
    async save() {
      this.isLoading = true;

      if (!this.isValid()) {
        this.isLoading = false;
        return;
      }

      const form = {
        firstName: this.getFirstName,
        lastName: this.getLastName,
        occupation: this.getOccupation,
        photo: this.getPhotoUpload.name,
        contact: {
          address: this.getAddress,
          phone: this.getPhone,
          email: this.getEmail,
          linkedin: this.getLinkedin,
        },
        languages: this.getLanguages,
        summary: this.getSummary,
        skills: this.getSkills,
        experiences: this.getExperiences,
        educations: this.getEducations,
        certifications: this.getCertifications,
      };

      const formData = new FormData();
      formData.append("file", this.getPhotoUpload);

      try {
        const response = await axios.post("/create-cv", form);
        if (response.data.status === "success") {
          formData.append("usersBioId", response.data.users_bio_id);
          try {
            await axios.post("/upload-photo", formData);
            this.isLoading = false;
            this.$router.push({ name: "home" });
          } catch (err) {
            console.log(err);
          }
        }
      } catch (err) {
        console.log(err);
      }

      // firebase
      //   .storage()
      //   .ref(`${this.getPhotoUpload.name}`)
      //   .put(this.getPhotoUpload);

      this.isLoading = false;
    },
  },
  created() {
    this.updateCurrentPage(this.$route.name);
  },
};
</script>

<style></style>
