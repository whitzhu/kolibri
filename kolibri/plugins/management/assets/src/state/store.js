
const Vuex = require('vuex');
const coreStore = require('core-store');
const constants = require('./constants');

const initialState = {
  pageName: constants.PageNames.USER_MGMT_PAGE,
  pageState: {},
  facility: undefined,
};

const mutations = {
  ADD_USER(state, user) {
    state.pageState.users.push(user);
  },
  UPDATE_USERS(state, users) {
    users.forEach(user => {
      state.pageState.users.forEach(existingUser => {
        if (existingUser.id === user.id.toString()) {
          existingUser.username = user.username;
          existingUser.full_name = user.full_name;
          existingUser.roles = user.roles;
        }
      });
    });
  },
  DELETE_USER(state, id) {
    state.pageState.users = state.pageState.users.filter(user => user.id !== id);
  },
  SET_FACILITY(state, id) {
    state.facility = id;
  },
  SET_PAGE_NAME(state, name) {
    state.pageName = name;
  },
  SET_PAGE_STATE(state, pageState) {
    state.pageState = pageState;
  },
  DELETE_TASK(state) {
    state.pageState.taskList = [];
  },
  SET_TASK(state, task) {
    state.pageState.taskList = [task];
  },
};


// assigns core state and mutations
Object.assign(initialState, coreStore.initialState);
Object.assign(mutations, coreStore.mutations);


module.exports = new Vuex.Store({
  state: initialState,
  mutations,
});
