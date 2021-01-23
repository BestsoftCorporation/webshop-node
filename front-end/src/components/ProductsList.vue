<template>
  <div class="container" id="ProductsList">
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col-md-4">
        <div class="card mb-4 box-shadow">
          <a :href="'/product/' + product.id">
            <img
              class="card-img-top"
              :src="require('@/assets/' + product.image)"
              alt="Card image caps"
            />
          </a>
          <div class="card-body">
            <p class="card-text">{{ product.name }}<br>id:{{product.id}}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
               
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Buy
                </button>
              </div>
              <small class="text-muted"> {{ product.price }}$</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import router from "@/router";

export default {
  name: "ProductsList",
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
