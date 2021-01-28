<template>
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
          <b-nav-item href="/register">Register</b-nav-item>
          <b-nav-item href="/login">Log in</b-nav-item>
         <b-nav-item href="/logout">Logout {{user.first_name}}</b-nav-item>
          
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    
        <b-jumbotron header="Phones" :lead="'there are ' + products.length + ' available phones' ">
        </b-jumbotron>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    
    
    export default {
        name: "Header",
        computed: {
            ...mapState(['products','user'])
        }
    }
</script>

<style scoped>

</style>