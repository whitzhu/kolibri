

const UserKinds = require('./constants').UserKinds;

// core state is namespaced, and merged with a particular app's state
const initialState = {
  core: {
    error: '',
    loading: true,
    session: { id: undefined,
               username: '',
               full_name: '',
               user_id: undefined,
               facility_id: undefined,
               kind: [UserKinds.ANONYMOUS],
               error: '200' },
    login_modal_state: false,
    fullname: '',
    logging: {
      summary: { progress: 0 },
      session: { },
    },
  },
};

const mutations = {
  CORE_SET_SESSION(state, value) {
    state.core.session = value;
    state.core.login_modal_state = false;
  },
  // Makes settings for wrong credentials 401 error
  CORE_HANDLE_WRONG_CREDS(state, value) {
    state.core.session = value;
  },
  CORE_CLEAR_SESSION(state) {
    state.core.session = { id: undefined,
                           username: '',
                           full_name: '',
                           user_id: undefined,
                           facility_id: undefined,
                           kind: [UserKinds.ANONYMOUS],
                           error: '200' };
  },
  CORE_SET_PAGE_LOADING(state, value) {
    state.core.loading = value;
  },
  CORE_SET_ERROR(state, error) {
    state.core.error = error;
  },
  // Handles state of login modal appearance
  CORE_SET_MODAL_STATE(state, value) {
    state.core.login_modal_state = value;
  },
  SET_LOGGING_SUMMARY_STATE(state, summaryState) {
    state.core.logging.summary = summaryState;
  },
  SET_LOGGING_SUMMARY_ID(state, summaryId) {
    state.core.logging.summary.id = summaryId;
  },
  SET_LOGGING_SESSION_ID(state, sessionId) {
    state.core.logging.session.id = sessionId;
  },
  SET_LOGGING_SESSION_STATE(state, sessionState) {
    state.core.logging.session = sessionState;
  },
  SET_LOGGING_PROGRESS(state, sessionProgress, summaryProgress) {
    state.core.logging.session.progress = sessionProgress;
    state.core.logging.summary.progress = summaryProgress;
  },
  SET_LOGGING_COMPLETION_TIME(state, time) {
    state.core.logging.summary.completion_timestamp = time;
  },
  SET_LOGGING_TIME(state, sessionTime, summaryTime, currentTime) {
    state.core.logging.session.end_timestamp = currentTime;
    state.core.logging.summary.end_timestamp = currentTime;
    state.core.logging.session.time_spent = sessionTime;
    state.core.logging.summary.time_spent = summaryTime;
  },
  SET_LOGGING_PENDING(state, summaryPending, sessionPending) {
    state.core.logging.summary.pending_create = summaryPending;
    state.core.logging.session.pending_create = sessionPending;
  },
  SET_LOGGING_THRESHOLD_CHECKS(state, progress, timeSpent) {
    state.core.logging.session.total_time_at_last_save = timeSpent;
    state.core.logging.session.progress_at_last_save = progress;
  },
};

module.exports = {
  initialState,
  mutations,
};
