<template>
  <div>
    <Header />
    <div class="home">
      <HelloWorld />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Header
  },
};
</script>
