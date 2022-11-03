<template>
  <div v-if="getAnyDataExist === false" class="flex h-screen">
    <div class="m-auto">
      <router-link :to="{ name: 'create' }">
        <button
          class="bg-transparent text-green-600 border border-green-600 hover:border-transparent hover:bg-green-600 mx-5 px-5 py-2 w-max hover:text-white font-semibold rounded-full"
        >
          Create your CV now
        </button>
      </router-link>
    </div>
  </div>
  <div v-else class="grid grid-cols-3 gap-8 m-10">
    <div
      v-if="usersBio !== '' || usersContact !== '' || usersLanguages !== ''"
      class="bg-slate-100 p-5 rounded-lg shadow-lg"
    >
      <BioComponent
        v-if="usersBio !== ''"
        :usersBio="usersBio"
        class="mb-5"
      ></BioComponent>
      <ContactComponent
        v-if="usersContact !== ''"
        :usersContact="usersContact"
        class="mb-5"
      ></ContactComponent>
      <LanguageComponent
        v-if="usersLanguages !== ''"
        :usersLanguages="usersLanguages"
        class="mb-5"
      ></LanguageComponent>
    </div>
    <div
      v-if="
        usersBio !== '' ||
        usersSkills !== '' ||
        usersExperiences !== '' ||
        usersEducations !== '' ||
        usersCertifications !== ''
      "
      class="col-span-2 bg-zinc-100 p-5 rounded-lg shadow-lg"
    >
      <SummaryComponent
        v-if="usersBio !== ''"
        :usersBio="usersBio"
        class="mb-5"
      ></SummaryComponent>
      <SkillComponent
        v-if="usersSkills !== ''"
        :usersSkills="usersSkills"
        class="mb-5"
      ></SkillComponent>
      <ExperienceComponent
        v-if="usersExperiences !== ''"
        :usersExperiences="usersExperiences"
        class="mb-5"
      ></ExperienceComponent>
      <EducationComponent
        v-if="usersEducations !== ''"
        :usersEducations="usersEducations"
        class="mb-5"
      ></EducationComponent>
      <CertificationComponent
        v-if="usersCertifications !== ''"
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
  computed: mapGetters(["getData", "getAnyDataExist"]),
  methods: {
    ...mapActions(["fetchData", "updateCurrentPage"]),
  },
  async created() {
    this.updateCurrentPage(this.$route.name);

    await this.fetchData("/view-cv/1");

    if (this.getAnyDataExist === false) {
      return;
    }

    this.usersBio =
      this.getData.users_bio !== undefined ? this.getData.users_bio : "";

    this.usersCertifications =
      this.getData.users_certifications.length !== 0
        ? this.getData.users_certifications
        : "";

    this.usersContact =
      this.getData.users_contact !== undefined
        ? {
            address: this.getData.users_contact.address,
            phone: this.getData.users_contact.phone,
            email: this.getData.users_contact.email,
            linkedin: this.getData.users_contact.linkedin,
          }
        : "";

    this.usersEducations =
      this.getData.users_educations.length !== 0
        ? this.getData.users_educations
        : "";

    this.usersExperiences =
      this.getData.users_experiences.length !== 0
        ? this.getData.users_experiences
        : "";

    this.usersLanguages =
      this.getData.users_languages.length !== 0
        ? this.getData.users_languages
        : "";

    this.usersSkills =
      this.getData.users_skills.length !== 0 ? this.getData.users_skills : "";
  },
};
</script>

<style></style>
