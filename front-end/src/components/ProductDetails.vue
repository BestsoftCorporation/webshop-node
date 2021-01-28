<template>
  <!-- Page Content -->
  <div class="container">
    <div class="row">
      <!-- /.col-lg-3 -->

      <div class="col-lg-9">
        <div class="card mt-4">
          <img
            class="card-img-top img-fluid"
            :src="require('@/assets/' + image)"
            alt=""
          />
          <div class="card-body">
            <h3 class="card-title">{{ name }}</h3>
            <h4>${{ price }}</h4>

            <b-form @submit.prevent="postComment">
              <b-row class="mt-2">
                <b-col sm="2" offset="2">
                  <label for="comm">Comment:</label>
                  <b-input
                    v-model="comm"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Type comment..."
                  ></b-input>
                </b-col>
              </b-row>
              <b-col sm="2" offset="2">
                <b-button variant="success" size="sm" @click="postComment"
                  >Leave a comment</b-button
                >
              </b-col>
            </b-form>
           

            <div v-for="review in reviews" :key="review.id" class="col-md-4">
              <div v-for="usr in users" :key="usr.id" >
                 <div v-if="review.idUser==usr.id">
                  <b> {{usr.first_name}}</b>:<p class="card-text">{{ review.comment }} - {{ review.date }}</p>
                </div>
              </div>
              

            </div>
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
import { mapState, mapActions } from "vuex";

export default {
  name: "ProductDetails",
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
      comm: "",
    };
  },
  computed: {
    ...mapState(["reviews","user", "users"]),
  },
  mounted: function () {
    const url = window.location.href;
    this.load_reviews(url.split("/").slice(-1)[0]);

    this.comm = this.comment;
  },
  methods: {
    ...mapActions(["load_reviews","post_review"]),

    postComment: function () {
      const url = window.location.href;

      const rev = JSON.stringify({
        comment: this.comm,
        idProduct: url.split("/").slice(-1)[0],
        idUser: this.$store.state.user.id,
      });

      this.post_review(rev);
    },
  },
};
</script>

<style scoped>
</style>