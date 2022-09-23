<template>
  <div class="grid grid-cols-3 gap-8 m-10">
    <div class="bg-slate-100 p-5 rounded-lg shadow-lg">
      <BioComponent class="mb-5"></BioComponent>
      <ContactComponent class="mb-5"></ContactComponent>
      <LanguageComponent class="mb-5"></LanguageComponent>
    </div>
    <div class="col-span-2 bg-zinc-100 p-5 rounded-lg shadow-lg">
      <SummaryComponent class="mb-5"></SummaryComponent>
      <SkillComponent class="mb-5"></SkillComponent>
      <ExperienceComponent class="mb-5"></ExperienceComponent>
      <EducationComponent class="mb-5"></EducationComponent>
      <CertificationComponent></CertificationComponent>
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
};
</script>

<style></style>
