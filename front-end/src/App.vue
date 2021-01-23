<template>
  <div id="app">

  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">PhonesWebShop</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/catalog">Phones</b-nav-item>
       
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      
         
           <b-nav-item href="/admin">admin</b-nav-item>
         
      
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    <router-view/>
  </div>


</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "App",
        methods: {
            ...mapActions(['load_products','new_product'])
        },
        mounted: function() {
            this.load_products();        
        }
    }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
