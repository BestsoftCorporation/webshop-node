<template>
  <b-container fluid>
    
    <b-form @submit.prevent="checkForm">
      <b-row class="mt-2">
        <b-col sm="2" offset="2">
          <label for="newEmail">Email:</label>
          <b-input
            v-model="newEmail"
            type="email"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Email"
          ></b-input>
        </b-col>
      </b-row>

      <b-row class="mt-2">
        <b-col sm="2" offset="2">
          <label for="newPassword">Password:</label>
          <b-input
            v-model="newPassword"
            type="password"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Password"
          ></b-input>
        </b-col>
      </b-row>

      <b-col sm="2" offset="2">
        <b-button variant="primary" size="lg" @click="checkForm"
          >Log in</b-button
        >
      </b-col>
      <div v-if="errors.length" class="alert alert-danger" role="alert">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" :key="error.id">{{ error }}</li>
        </ul>
      </div>

      <div v-if="added" class="alert alert-success" role="alert">
        Login successfull!
      </div>
      <div v-if="err" class="alert alert-danger" role="alert">Error</div>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Logins",
  computed: {
    ...mapState(["users"]),
  },
  props: {

    password: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
     
      newPassword: "",
      newEmail: "",
      errors: [],
      err: false,
      added: false,
    };
  },
  mounted: function () {

    this.newPassword = this.password;
    this.newEmail = this.email;
  },

  methods: {
    ...mapActions(["login","load_user"]),

    checkForm: function () {
      this.errors = [];

      if (this.errors.length == 0) {
        this.addNew();
      }
    },

    addNew: function () {
      const usr = JSON.stringify({
         password: this.newPassword,
         email: this.newEmail
      });

      this.login(usr);
      this.load_user(); 
      this.err=true;
      this.added = true;
    },
  },
};
</script>

<style scoped>
</style>