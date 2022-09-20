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
import BioComponent from "@/components/BioComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import LanguageComponent from "@/components/LanguageComponent.vue";
import SummaryComponent from "@/components/SummaryComponent.vue";
import SkillComponent from "@/components/SkillComponent.vue";
import ExperienceComponent from "@/components/ExperienceComponent.vue";
import EducationComponent from "@/components/EducationComponent.vue";
import CertificationComponent from "@/components/CertificationComponent.vue";

export default {
  name: 'App',
  components: {
    BioComponent,
    ContactComponent,
    LanguageComponent,
    SummaryComponent,
    SkillComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationComponent
  }
}
</script>

<style>

</style>