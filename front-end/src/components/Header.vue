<template>

    <div>
    
        <b-jumbotron header="Phones" :lead="'there are ' + products.length + ' available phones'">
        </b-jumbotron>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    
    
    export default {
        name: "Header",
        computed: {
            ...mapState(['products'])
        }
    }
</script>

<style scoped>

</style>