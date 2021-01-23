<template>
    <div>
        <Header/>
        <b-container>
            <b-row>
                <b-col cm="6" >
                    <div >
                        <ProductDetails :image="product.image"  :price="product.price" :name="product.name" :product="product"/>
                    </div>
                </b-col>
            </b-row>
        
        </b-container>
    </div>
</template>

<script>

    import Header from "@/components/Header";
    import ProductDetails from "@/components/ProductDetails";
    import { mapState, mapActions } from 'vuex';

    export default {
        name: "Product",
        components: {
            Header,
           
            ProductDetails
        },
        data() {
            return {
                edit: true
            }
        },
        computed: {
            ...mapState(['products']),

            product: function () {
                for (let i = 0; i < this.products.length; i++)
                    if (this.products[i].id === parseInt(this.$route.params.id))
                        return this.products[i];
                return this.products[0];
            }
        },
        methods: {
            ...mapActions(['load_products']),

            toggleEdit: function () {
                this.edit = !this.edit
            }
        }
    }
</script>

<style scoped>

</style>