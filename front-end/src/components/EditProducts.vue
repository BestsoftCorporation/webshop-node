<template>
  <b-container fluid>
    <div v-if="product" class="alert alert-primary" role="alert">
      {{ product.name }}
    </div>
    <b-form @submit.prevent="checkForm">
      <b-row class="mt-2">
        <b-col sm="2" offset="2">
          <label for="newName">Name:</label>
          <b-input
            v-model="newName"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Name"
          ></b-input>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col sm="2" offset="2">
          <label for="newPrice">Price:</label>
          <b-input
            v-model="newPrice"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Price"
          ></b-input>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col sm="2" offset="2">
          <label for="newImage">Image:</label>
          <b-input
            v-model="newImage"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="image"
          ></b-input>
        </b-col>
      </b-row>

      <b-col sm="2" offset="2">
        <b-button variant="primary" size="lg" @click="checkForm">Save</b-button>
      </b-col>

      <b-col v-if="this.$route.params.id" sm="2" offset="2">
        <b-button variant="danger" size="lg" @click="remove">Delete</b-button>
      </b-col>

      <b-col v-if="this.$route.params.id" sm="2" offset="2">
        <b-button variant="primary" size="lg" @click="oldData"
          >Load old data</b-button
        >
      </b-col>

      <div v-if="errors.length" class="alert alert-danger" role="alert">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" :key="error.id">{{ error }}</li>
        </ul>
      </div>

      <div v-if="added" class="alert alert-success" role="alert">
        Product added successfuly!
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
    ...mapState(["products"]),
    product: function () {
      for (let i = 0; i < this.products.length; i++)
        if (this.products[i].id === parseInt(this.$route.params.id))
          return this.products[i];
      return null;
    },
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      newName: "",
      newPrice: 0,
      newImage: "",
      errors: [],
      err: false,
      added: false,
    };
  },
  mounted: function () {
    this.newName = this.name;
    this.newPrice = this.price;
    this.newImage = this.image;
  },

  methods: {
    ...mapActions([
      "add_product",
      "new_product",
      "change_product",
      "delete_product",
    ]),

    oldData: function () {
      if (this.product != null) {
        this.newName = this.product.name;
        this.newPrice = this.product.price;
        this.newImage = this.product.image;
      }
    },

    checkForm: function () {
      this.errors = [];

      if (!this.newName && this.newName.length < 45) {
        this.errors.push("Name required.");
      }
      if (!this.newPrice || this.newPrice <= 0) {
        this.errors.push("Price  have to be more than 0.");
      }

      if (!this.newImage) {
        this.errors.push("Image required.");
      }

      if (this.errors.length == 0) {
        this.addNew();
      }
    },

    addNew: function () {
      const pro = JSON.stringify({
        name: this.newName,
        price: this.newPrice,
        image: this.newImage,
      });

      if (!this.$route.params.id) {
        this.new_product(pro);
        //this.err=true;
        this.added = true;
      } else {
        this.change_product({ id: this.$route.params.id, pro: pro });
        this.$router.push("/admin");
      }

      this.newName = "";
      this.newPrice = "";
      this.newImage = "";
    },

    remove: function () {
      this.delete_product(this.$route.params.id);
      this.$router.push("/admin");
      this.newName = "";
      this.newPrice = "";
      this.newImage = "";
    },
  },
};
</script>

<style scoped>
</style>