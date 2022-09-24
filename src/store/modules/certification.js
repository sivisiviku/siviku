const state = {
  certifications: [],
};

const getters = {
  getCertifications: (state) => state.certifications,
};

const actions = {
  updateCertifications({ commit }, payload) {
    const updateType = payload.isDelete
      ? "removeCertifications"
      : "setCertifications";
    commit(updateType, payload.value);
  },
};

const mutations = {
  setCertifications: (state, payload) => state.certifications.push(payload),
  removeCertifications: (state, payload) =>
    state.certifications.splice(payload, 1),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
