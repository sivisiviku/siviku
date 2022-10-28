import axios from "axios";

const state = {
  data: null,
  anyDataExist: false,
};

const getters = {
  getData: (state) => state.data,
  getAnyDataExist: (state) => state.anyDataExist,
};

const actions = {
  async fetchData({ commit }, payload) {
    const response = await axios.get(payload);
    commit("setData", response.data);
  },
};

const mutations = {
  setData: (state, payload) => {
    state.data = payload;
    if (state.data.users_bio !== undefined) {
      state.anyDataExist = true;
    }
    if (state.data.users_certifications.length > 0) {
      state.anyDataExist = true;
    }
    if (state.data.users_contact !== undefined) {
      state.anyDataExist = true;
    }
    if (state.data.users_educations.length > 0) {
      state.anyDataExist = true;
    }
    if (state.data.users_experiences.length > 0) {
      state.anyDataExist = true;
    }
    if (state.data.users_languages.length > 0) {
      state.anyDataExist = true;
    }
    if (state.data.users_skills.length > 0) {
      state.anyDataExist = true;
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
