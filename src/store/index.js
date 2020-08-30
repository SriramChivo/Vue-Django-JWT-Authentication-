import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
    IsUserCreated: false
  },
  getters: {
    userCreated: (state) => {
      return (state.IsUserCreated)
    }
  },
  mutations: {
    getToken: (state, payload) => {
      console.log(payload);
      axios.post("http://127.0.0.1:8000/api/api-token-auth/", payload)
        .then(
          (response) => {
            console.log(response);
            state.token = response.data.token
            console.log(response.data.token);
          }
        )
        .catch(
          (error) => {
            console.log("error");
            console.log(error);
          }
        );
    },
    registerUser: (state, payload) => {
      axios.post("http://127.0.0.1:8000/api/CreateUser/", payload).then(
        (response) => {
          console.log(response);
          state.IsUserCreated = true;
        }
      ).catch(
        (error) => {
          console.log(error);
        }
      );
    }

  },
  actions: {
    getTokeAction: (context, payload) => {
      console.log(payload);
      context.commit("getToken", payload)
    },
    CreateUserAction: (context, payload) => {
      console.log(payload);
      context.commit("registerUser", payload)
    }
  },
  modules: {
  }
})
