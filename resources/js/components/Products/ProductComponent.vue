<template>
    <div style="height: 100vh">
        <v-col v-for="product in products" :key="product.id" :xs="6" :sm="4" :md="2" :lg="2" :xl="3">
            <v-card outlined shaped elevation="12" dark class="my-auto">
                <v-carousel>
                    <v-carousel-item v-for="item in product.images" :key="item.id" :src="item.url" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
                </v-carousel>
                <v-card-title style="color: pink">
                    {{ product.product_name }}
                </v-card-title>
                <v-card-text>
                    <div>
                        Descripción: <strong style="color: pink">{{ product.product_description }}</strong>
                    </div>
                    <div v-if="product.gender">
                        Prenda para: <strong style="color: pink">{{ product.gender }}</strong>
                    </div>
                    <div>
                        Subcategoría: <strong style="color: pink">{{product.category.category_name}}</strong>
                    </div>
                    <div v-if="product.size">
                        Tamaño: <strong style="color: pink">{{ product.size }}</strong>
                    </div>
                    <div v-if="product.color">
                        Color: <strong style="color: pink">{{ product.color }}</strong>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <router-link :product="product" :to="{name: 'details', params: {id: product.id} }">
                        <v-btn text color="teal accent-2">
                            Detalles
                        </v-btn>
                    </router-link>
                </v-card-actions>
            </v-card>
        </v-col>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('ruta: ', this.$route.path)
    },
    created() {
        console.log('saludos')
    },
    computed: {
        products() {
            return this.$store.state.products
        }
    }
}
</script>

<style>

</style>