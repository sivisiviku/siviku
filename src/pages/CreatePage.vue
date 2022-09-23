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
import firebase from "firebase";
import BioFormComponent from "@/components/FormComponent/BioFormComponent.vue";
import CertificationFormComponent from "@/components/FormComponent/CertificationFormComponent.vue";
import ContactFormComponent from "@/components/FormComponent/ContactFormComponent.vue";
import EducationForm from "@/components/FormComponent/EducationFormComponent.vue";
import ExperienceFormComponent from "@/components/FormComponent/ExperienceFormComponent.vue";
import LanguageFormComponent from "@/components/FormComponent/LanguageFormComponent.vue";
import SkillFormComponent from "@/components/FormComponent/SkillFormComponent.vue";
import SummaryFormComponent from "@/components/FormComponent/SummaryFormComponent.vue";

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
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        photo: "",
        contact: {
          address: "",
          email: "",
          linkedin: "",
        },
        languages: [],
        skill: [],
        experiences: [],
        educations: [],
        certifications: [],
      },
    };
  },
  methods: {
    save() {
      // firebase.storage().ref(`${this.photoUpload.name}`).put(this.photoUpload);
    },
  },
};
</script>

<style></style>
