import axios from "axios";

const state = {
  data: null,
};

const getters = {
  getData: (state) => state.data,
};

const actions = {
  async fetchData({ commit }, payload) {
    const response = await axios.get(payload);
    commit("setData", response.data);
  },
};

const mutations = {
  setData: (state, payload) => (state.data = payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
