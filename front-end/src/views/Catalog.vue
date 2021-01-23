<template>
  <div class="home">
      <Header/>
      <b-container>
          <b-row>
              <b-col cm="6" >
                  <ProductsList/>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>


<script>
// @ is an alias to /src
import Header from "@/components/Header";
import ProductsList from "@/components/ProductsList";

export default {
    name: 'catalog',
    components: {
        Header,
        ProductsList
    }
}
</script>