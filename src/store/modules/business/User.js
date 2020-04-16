const User = {
    state: { isLoggedIn: false },
    mutations: {
        logInOut(state) {
            console.log(state)
            state.isLoggedIn = !state.isLoggedIn
        }  },
    actions: {  },
    getters: {  }
};

export default User;