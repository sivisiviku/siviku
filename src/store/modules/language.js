const state = {
  languages: [],
};

const getters = {
  getLanguages: (state) => state.languages,
};

const actions = {
  updateLanguages({ commit }, payload) {
    commit("setLanguages", payload);
  },
};

const mutations = {
  setLanguages: (state, payload) => (state.languages = payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
