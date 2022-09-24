const state = {
  educations: [],
};

const getters = {
  getEducations: (state) => state.educations,
};

const actions = {
  updateEducations({ commit }, payload) {
    const updateType = payload.isDelete ? "removeEducations" : "setEducations";
    commit(updateType, payload.value);
  },
};

const mutations = {
  setEducations: (state, payload) => state.educations.push(payload),
  removeEducations: (state, payload) => state.educations.splice(payload, 1),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
