<template>
  <div class="grid grid-cols-3 gap-8 m-10">
    <div class="bg-slate-100 p-5 rounded-lg shadow-lg">
      <BioComponent :usersBio="usersBio" class="mb-5"></BioComponent>
      <ContactComponent
        :usersContact="usersContact"
        class="mb-5"
      ></ContactComponent>
      <LanguageComponent
        :usersLanguages="usersLanguages"
        class="mb-5"
      ></LanguageComponent>
    </div>
    <div class="col-span-2 bg-zinc-100 p-5 rounded-lg shadow-lg">
      <SummaryComponent :usersBio="usersBio" class="mb-5"></SummaryComponent>
      <SkillComponent :usersSkills="usersSkills" class="mb-5"></SkillComponent>
      <ExperienceComponent
        :usersExperiences="usersExperiences"
        class="mb-5"
      ></ExperienceComponent>
      <EducationComponent
        :usersEducations="usersEducations"
        class="mb-5"
      ></EducationComponent>
      <CertificationComponent
        :usersCertifications="usersCertifications"
      ></CertificationComponent>
    </div>
  </div>
</template>

<script>
import BioComponent from "@/components/ViewComponent/BioComponent.vue";
import ContactComponent from "@/components/ViewComponent/ContactComponent.vue";
import LanguageComponent from "@/components/ViewComponent/LanguageComponent.vue";
import SummaryComponent from "@/components/ViewComponent/SummaryComponent.vue";
import SkillComponent from "@/components/ViewComponent/SkillComponent.vue";
import ExperienceComponent from "@/components/ViewComponent/ExperienceComponent.vue";
import EducationComponent from "@/components/ViewComponent/EducationComponent.vue";
import CertificationComponent from "@/components/ViewComponent/CertificationComponent.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    BioComponent,
    ContactComponent,
    LanguageComponent,
    SummaryComponent,
    SkillComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationComponent,
  },
  data() {
    return {
      usersBio: "",
      usersCertifications: "",
      usersContact: "",
      usersEducations: "",
      usersExperiences: "",
      usersLanguages: "",
      usersSkills: "",
    };
  },
  computed: mapGetters(["getData"]),
  methods: {
    ...mapActions(["fetchData"]),
  },
  async created() {
    await this.fetchData("/view-cv/1");
    this.usersBio = this.getData.users_bio;
    this.usersCertifications = this.getData.users_certifications;
    this.usersContact = {
      address: this.getData.users_contact.address,
      phone: this.getData.users_contact.phone,
      email: this.getData.users_contact.email,
      linkedin: this.getData.users_contact.linkedin,
    };
    this.usersEducations = this.getData.users_educations;
    this.usersExperiences = this.getData.users_experiences;
    this.usersLanguages = this.getData.users_languages;
    this.usersSkills = this.getData.users_skills;
  },
};
</script>

<style></style>
