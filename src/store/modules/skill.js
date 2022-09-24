const state = {
  skills: [],
};

const getters = {
  getSkills: (state) => state.skills,
};

const actions = {
  updateSkills({ commit }, payload) {
    const updateType = payload.isDelete ? "removeSkills" : "setSkills";
    commit(updateType, payload.value);
  },
};

const mutations = {
  setSkills: (state, payload) => state.skills.push(payload),
  removeSkills: (state, payload) => state.skills.splice(payload, 1),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
