<template>
  <b-container fluid>
    <div v-if="product" class="alert alert-primary" role="alert">
      {{ product.name }}
    </div>
    <b-form @submit.prevent="checkForm">
      <b-row class="mt-2">
        <b-col sm="2" offset="2">
          <label for="firstName">First Name:</label>
          <b-input
            v-model="firstName"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="firstName"
          ></b-input>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col sm="2" offset="2">
          <label for="newPrice">Last Name:</label>
          <b-input
            v-model="lastName"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Last Name"
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
      <b-col sm="2" offset="2">
        <b-button variant="primary" size="lg" @click="checkForm"
          >Register</b-button
        >
      </b-col>
      <div v-if="errors.length" class="alert alert-danger" role="alert">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" :key="error.id">{{ error }}</li>
        </ul>
      </div>

      <div v-if="added" class="alert alert-success" role="alert">
        Registration successfull!
      </div>
      <div v-if="err" class="alert alert-danger" role="alert">Error</div>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "EditProduct",
  computed: {
    ...mapState(["users"]),
  
  },
  props: {
    first_name: {
      type: String,
      default: "",
    },
    last_name: {
      type: String,
      default: "",
    },
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
      firstName: "",
      lastName: "",
      newPassword: "",
      newEmail: "",
      errors: [],
      err: false,
      added: false,
    };
  },
  mounted: function () {
    this.firstName = this.first_name;
    this.lastName = this.last_name;
    this.newPassword = this.password;
    this.newEmail = this.email;
  },

  methods: {
    ...mapActions([
      "register",
    ]),


    checkForm: function () {
      this.errors = [];

      if (this.errors.length == 0) {
        this.addNew();
      }
    },

    addNew: function () {
      const usr = JSON.stringify({
        first_name: this.firstName,
        last_name: this.lastName,
        password: this.newPassword,
        email: this.newEmail,
      });

      this.register(usr);
      //this.err=true;
      this.added = true;
    },

  },
};
</script>

<style scoped>
</style>