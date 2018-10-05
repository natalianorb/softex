<template>
<div class="contact">
  <h1 class="contact__header">Contact Form</h1>
  <div class="contact__body">
    <v-flex xs12 sm9 md6>    
      <v-form v-model="valid" >
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="phone"
          validate-on-blur="true"
          :rules="phoneRules"
          mask="#(###)###-##-##"
          label="Phone"
          required
        ></v-text-field>
        <v-textarea
          name="message"
          v-model="message"
          :rules="messageRules"
          label="Message"
          :counter="250"
          required
        ></v-textarea>
        <v-btn
          :disabled="!valid"
          @click="submit"
        >
          submit
        </v-btn>
      </v-form>
    </v-flex>
  </div>
</div>
</template>

<script>
import store from '../store.js';

export default {
  store,
  data() {
    return {
      valid: true,
      name: this.$store.state.contactForm.name,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length > 2) || 'Name must be more than 2 characters'
      ],
      phone: '',
      phoneRules: [
        v => !!v || 'Phone is required',
        v => {
          let clearValue = v.replace(/\D/, '');
          return /^((\+7|7|8)+([0-9]){10})$/.test(clearValue) || 'Phone number must be valid' }
      ],
      message: '',
      messageRules: [
        v => !!v || 'Message is required',
        v => (v && v.length <= 250) || 'Name must be less than 250 characters'
      ]
    }
  },
  methods: {
    submit () {
      if (this.valid) {
        fetch('https://httpbin.org/post', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            phone: this.phone,
            message: this.message
          })
        })
        .then(resp => {
          if (resp.status === 200) {
            return resp.json();
          }
          throw new Error(resp.statusText);          
        })
        //eslint-disable-next-line
        .then(body => {
          this.$store.commit('updateContactForm', {
            name: this.name,
            phone: this.phone,
            message: this.message
          });
        })
        //eslint-disable-next-line
        .catch(error => {
        });
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
};
</script>

<style>
</style>
