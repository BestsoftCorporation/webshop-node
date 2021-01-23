<template>
  <div class="home">
      <Header/>
      <b-container>
          <b-row>
              <b-col cm="6" >
                  <AdminPanel/>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>


<script>
// @ is an alias to /src
import Header from "@/components/Header";
import AdminPanel from "@/components/AdminPanel";

export default {
    name: 'admin',
    components: {
        Header,
        AdminPanel
    }
}
</script>