import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    users: [],
    user: []
  },
  mutations: {
    set_products: function (state, products) {
      state.products = products;
    },
    set_token: function ( token) {
      token;
      //alert(token);
    },

    add_product: function (state, product) {
      state.products.push(product);
    },

    set_user: function (state, user) {
      state.user = user;
      
    },

    add_users: function (state, user) {
      state.users.push(user);
    },

    remove_product: function (state, id) {
      for (let p = 0; p < state.products.length; p++) {
        if (state.products[p].id === id) {
          state.products.splice(p, 1);
          break;
        }
      }
    },
    update_product: function (state, payload) {
      for (let p = 0; p < state.products.length; p++) {
        if (state.products[p].id === parseInt(payload.id)) {
          state.products[p].name = payload.pro.name;
          state.products[p].price = payload.pro.price;
          state.products[p].image = payload.pro.image;
          break;
        }
      }
    }
  },
  actions: {

    load_products: function ({ commit }) {

      fetch("http://localhost:8080/api/products", { method: 'get' }).then((response) => {
        if (!response.ok)
          throw response;
        return response.json()
      }).then((jsonData) => {
        commit('set_products', jsonData);
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },



    register: function ({ commit }, usr) {

      fetch('http://localhost:8080/api/users', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: usr
      }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json();
      }).then((jsonData) => {
        commit('add_users', jsonData);
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

    login: function ({ commit }, usr) {

      fetch('http://localhost:8080/api/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: usr
      }).then((response) => {
        if (!response.ok)
          throw response;
         
        return response.json();
      }).then((jsonData) => {
        localStorage.setItem('token', jsonData["token"]);
        commit('set_token', jsonData["token"]);
       // this.$router.push('/');
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },



    load_user: function ({ commit }) {

      fetch('http://localhost:8080/api/user', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token')
        },
        
      }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json();
      }).then((jsonData) => {
       
        commit('set_user', jsonData);
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

    new_product: function ({ commit }, pro) {

      fetch('http://localhost:8080/api/products', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: pro
      }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json();
      }).then((jsonData) => {
        commit('add_product', jsonData);
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

    change_product: function ({ commit }, payload) {

      fetch(`http://localhost:8080/api/product/${payload.id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: payload.pro
      }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json();
      }).then((jsonData) => {
        commit('update_product', { id: payload.id, pro: jsonData });
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

    delete_product: function ({ commit }, id) {

      fetch(`http://localhost:8080/api/product/${id}`, { method: 'delete' }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json()
      }).then((jsonData) => {
        commit('remove_product', jsonData.id)
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    }



  }
})
