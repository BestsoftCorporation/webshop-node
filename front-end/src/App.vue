<template>
  <div id="app">


    <router-view/>
  </div>


</template>

<script>
    import { mapActions ,mapState} from 'vuex';

    export default {
        name: "App",
        methods: {
            ...mapActions(['load_products','new_product','load_user','load_users'])
        },
        computer: {
          ...mapState(['user'])
        },
        mounted: function() {
            this.load_products();     
            this.load_user(); 
            this.load_users();
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
