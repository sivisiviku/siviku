const state = {
  address: "",
  phone: "",
  email: "",
  linkedin: "",
};

const getters = {
  getAddress: (state) => state.address,
  getPhone: (state) => state.phone,
  getEmail: (state) => state.email,
  getLinkedin: (state) => state.linkedin,
};

const actions = {
  updateAddress({ commit }, payload) {
    commit("setAddress", payload);
  },
  updatePhone({ commit }, payload) {
    commit("setPhone", payload);
  },
  updateEmail({ commit }, payload) {
    commit("setEmail", payload);
  },
  updateLinkedin({ commit }, payload) {
    commit("setLinkedin", payload);
  },
};

const mutations = {
  setAddress: (state, payload) => (state.address = payload),
  setPhone: (state, payload) => (state.phone = payload),
  setEmail: (state, payload) => (state.email = payload),
  setLinkedin: (state, payload) => (state.linkedin = payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
