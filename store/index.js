export const state = () => ({
  user: null,
});

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, user) => {
      state.user = user;
      console.log(state.user)
  },

};
