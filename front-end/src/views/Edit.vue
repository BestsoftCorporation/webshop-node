<template>
    <div class="home">
        <Header/>
        <b-container>
            <b-row>
                <b-col cm="6" >
                    <EditProducts />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import EditProducts from "@/components/EditProducts";
 
    import Header from "@/components/Header";

    export default {
        name: "Edit",
        components: {
            Header,
            EditProducts
        }
    }
</script>

<style scoped>

</style>