<template>


<div class="container" id="ProductsList">
  <h2>Admin Panel</h2>
  <p>Products</p>            
 <a href="/newProduct" >New</a>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Image</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td> {{ product.name }}</td>
        <td> {{ product.price }}</td>
        <td> {{ product.image }}</td>
        <td><a :href="'/newProduct/'+product.id" >Edit</a></td>
      </tr>
      
    </tbody>
  </table>
</div>
 
</template>

<script>
import { mapState, mapActions } from "vuex";
import router from "@/router";



export default {
  name: "AdminPanel",
  computed: {
    ...mapState(["products"]),
  },
  data() {
    return {
      fields: [
        { key: "name" },
        { key: "id" },
        { key: "price" },
        { key: "image" },
      ],
    };
  },
  methods: {
    ...mapActions(["delete_product"]),

    editProduct: function(item) {
      router.push({ path: `/message/${item.id}` });
    },
  },
};
</script>

<style>
tr:hover td {
  background: lightgreen;
}
</style>