import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contactForm: {
      name: 'Fill Murray',
      phone: '',
      message: ''
    }
  },
  mutations: {
    updateContactForm(state, payload) {
      state.contactForm = payload;
    } 
  }
})
