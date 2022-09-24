const state = {
  experiences: [],
};

const getters = {
  getExperiences: (state) => state.experiences,
};

const actions = {
  updateExperiences({ commit }, payload) {
    const updateType = payload.isDelete
      ? "removeExperiences"
      : "setExperiences";
    commit(updateType, payload.value);
  },
};

const mutations = {
  setExperiences: (state, payload) => state.experiences.push(payload),
  removeExperiences: (state, payload) => state.experiences.splice(payload, 1),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
