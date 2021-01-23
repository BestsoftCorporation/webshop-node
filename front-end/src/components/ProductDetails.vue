<template>
<!-- Page Content -->
  <div class="container">

    <div class="row">

      <!-- /.col-lg-3 -->

      <div class="col-lg-9">

        <div class="card mt-4">
          <img class="card-img-top img-fluid" :src="require('@/assets/' + image)" alt="">
          <div class="card-body">
            <h3 class="card-title">{{name}}</h3>
            <h4>${{price}}</h4>
            <p class="card-text"></p>
            <span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
            4.0 stars
          </div>
        </div>
        <!-- /.card -->


        <!-- /.card -->

      </div>
      <!-- /.col-lg-9 -->

    </div>

  </div>
  <!-- /.container -->
</template>

<script>

    export default {
        name: "ProductDetails",
        props: {
            name: {
                type: String,
                default: ''
            },
            price: {
                type: Number,
                default: 0
            },
            image: {
                type: String,
                default: ''
            }
        },
    
    }
</script>

<style scoped>

</style>