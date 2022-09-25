const state = {
  firstName: "",
  lastName: "",
  occupation: "",
  photoPreview: "",
  photoUpload: "",
};

const getters = {
  getFirstName: (state) => state.firstName,
  getLastName: (state) => state.lastName,
  getOccupation: (state) => state.occupation,
  getPhotoPreview: (state) => state.photoPreview,
  getPhotoUpload: (state) => state.photoUpload,
};

const actions = {
  updateFirstName({ commit }, payload) {
    commit("setFirstName", payload);
  },
  updateLastName({ commit }, payload) {
    commit("setLastName", payload);
  },
  updateOccupation({ commit }, payload) {
    commit("setOccupation", payload);
  },
  updatePhotoUpload({ commit }, payload) {
    commit("setPhotoUpload", payload);
  },
  updatePhotoPreview({ commit }, payload) {
    commit("setPhotoPreview", payload);
  },
};

const mutations = {
  setFirstName: (state, payload) => (state.firstName = payload),
  setLastName: (state, payload) => (state.lastName = payload),
  setOccupation: (state, payload) => (state.occupation = payload),
  setPhotoUpload: (state, payload) => (state.photoUpload = payload),
  setPhotoPreview: (state, payload) => (state.photoPreview = payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
