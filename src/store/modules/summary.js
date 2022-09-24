const state = {
  summary: "",
};

const getters = {
  getSummary: (state) => state.summary,
};

const actions = {
  updateSummary({ commit }, payload) {
    commit("setSummary", payload);
  },
};

const mutations = {
  setSummary: (state, payload) => (state.summary = payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
