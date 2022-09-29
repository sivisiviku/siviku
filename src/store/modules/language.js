const state = {
  languages: [],
};

const getters = {
  getLanguages: (state) => state.languages,
};

const actions = {
  updateLanguages({ commit }, payload) {
    const updateType = payload.isDelete ? "removeLanguages" : "setLanguages";
    commit(updateType, payload.value);
  },
};

const mutations = {
  setLanguages: (state, payload) => state.languages.push(payload),
  removeLanguages: (state, payload) => state.languages.splice(payload, 1),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
