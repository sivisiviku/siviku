const state = {
  form: {
    firstNameValidation: true,
    lastNameValidation: true,
    occupationValidation: true,
    photoUploadValidation: true,
    photoUploadValidationMessage: "",
    addressValidation: true,
    phoneValidation: true,
    emailValidation: true,
    linkedinValidation: true,
    languagesValidation: true,
    summaryValidation: true,
    skillsValidation: true,
    experiencesValidation: true,
    educationsValidation: true,
    certificationsValidation: true,
  },
};

const getters = {
  getFirstNameValidation: (state) => state.firstNameValidation,
  getLastNameValidation: (state) => state.lastNameValidation,
  getOccupationValidation: (state) => state.occupationValidation,
  getPhotoUploadValidation: (state) => state.photoUploadValidation,
  getPhotoUploadValidationMessage: (state) =>
    state.photoUploadValidationMessage,
  getAddressValidation: (state) => state.addressValidation,
  getPhoneValidation: (state) => state.phoneValidation,
  getEmailValidation: (state) => state.emailValidation,
  getLinkedinValidation: (state) => state.linkedinValidation,
  getLanguagesValidation: (state) => state.languagesValidation,
  getSummaryValidation: (state) => state.summaryValidation,
  getSkillsValidation: (state) => state.skillsValidation,
  getExperiencesValidation: (state) => state.experiencesValidation,
  getEducationsValidation: (state) => state.educationsValidation,
  getCertificationsValidation: (state) => state.certificationsValidation,
};

const actions = {
  updateFirstNameValidation({ commit }, payload) {
    commit("setFirstNameValidation", payload);
  },
  updateLastNameValidation({ commit }, payload) {
    commit("setLastNameValidation", payload);
  },
  updateOccupationValidation({ commit }, payload) {
    commit("setOccupationValidation", payload);
  },
  updatePhotoUploadValidation({ commit }, payload) {
    commit("setPhotoUploadValidation", payload);
  },
  updatePhotoUploadValidationMessage({ commit }, payload) {
    commit("setPhotoUploadValidationMessage", payload);
  },
  updateAddressValidation({ commit }, payload) {
    commit("setAddressValidation", payload);
  },
  updatePhoneValidation({ commit }, payload) {
    commit("setPhoneValidation", payload);
  },
  updateEmailValidation({ commit }, payload) {
    commit("setEmailValidation", payload);
  },
  updateLinkedinValidation({ commit }, payload) {
    commit("setLinkedinValidation", payload);
  },
  updateLanguagesValidation({ commit }, payload) {
    commit("setLanguagesValidation", payload);
  },
  updateSummaryValidation({ commit }, payload) {
    commit("setSummaryValidation", payload);
  },
  updateSkillsValidation({ commit }, payload) {
    commit("setSkillsValidation", payload);
  },
  updateExperiencesValidation({ commit }, payload) {
    commit("setExperiencesValidation", payload);
  },
  updateEducationsValidation({ commit }, payload) {
    commit("setEducationsValidation", payload);
  },
  updateCertificationsValidation({ commit }, payload) {
    commit("setCertificationsValidation", payload);
  },
};

const mutations = {
  setFirstNameValidation: (state, payload) =>
    (state.firstNameValidation = payload),
  setLastNameValidation: (state, payload) =>
    (state.lastNameValidation = payload),
  setOccupationValidation: (state, payload) =>
    (state.occupationValidation = payload),
  setPhotoUploadValidation: (state, payload) =>
    (state.photoUploadValidation = payload),
  setPhotoUploadValidationMessage: (state, payload) =>
    (state.photoUploadValidationMessage = payload),
  setAddressValidation: (state, payload) => (state.addressValidation = payload),
  setPhoneValidation: (state, payload) => (state.phoneValidation = payload),
  setEmailValidation: (state, payload) => (state.emailValidation = payload),
  setLinkedinValidation: (state, payload) =>
    (state.linkedinValidation = payload),
  setLanguagesValidation: (state, payload) =>
    (state.languagesValidation = payload),
  setSummaryValidation: (state, payload) => (state.summaryValidation = payload),
  setSkillsValidation: (state, payload) => (state.skillsValidation = payload),
  setExperiencesValidation: (state, payload) =>
    (state.experiencesValidation = payload),
  setEducationsValidation: (state, payload) =>
    (state.educationsValidation = payload),
  setCertificationsValidation: (state, payload) =>
    (state.certificationsValidation = payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
