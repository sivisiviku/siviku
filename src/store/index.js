import { createStore } from "vuex";
import bio from "./modules/bio";
import certification from "./modules/certification";
import contact from "./modules/contact";
import education from "./modules/education";
import experience from "./modules/experience";
import language from "./modules/language";
import skill from "./modules/skill";

const store = createStore({
  modules: {
    bio,
    certification,
    contact,
    education,
    experience,
    language,
    skill
  },
});

export default store;
