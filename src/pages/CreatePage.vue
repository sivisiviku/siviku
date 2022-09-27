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
      @click="save"
      class="bg-transparent text-green-600 border border-green-600 hover:border-transparent hover:bg-green-600 mx-5 px-5 py-2 w-1/4 hover:text-white font-semibold rounded-full"
    >
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
import { mapGetters } from "vuex";
import axios from "axios";

export default {
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
  computed: mapGetters([
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
  methods: {
    async save() {
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
    },
  },
};
</script>

<style></style>
