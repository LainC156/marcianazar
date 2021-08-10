<template>
    <v-app>
        <navigation-component />
        <v-main style="bbackground-color: #D9AFD9;background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);">
            <!-- Provides the application the proper gutter -->
            <v-container>
                <!-- data cards -->
                <v-row dense>
                    <v-card width="100vw" class="mx-auto" dark outlined shaped elevation="12">
                        <v-card-title style="color: pink">
                            {{ product.product_name }}
                        </v-card-title>
                        <v-carousel>
                            <v-carousel-item v-for="item in product.images" :key="item.id" :src="item.url" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
                        </v-carousel>
    
                        <v-card-text>
                            <v-card-subtitle class="text-center">
                                <div>
                                    Descripción: <strong style="color: pink">{{ product.product_description }}</strong>
                                </div>
                                <div v-if="product.gender">
                                    Prenda para: <strong style="color: pink">{{ product.gender }}</strong>
                                </div>
                                <div>
                                    Subcategoría: <strong style="color: pink">{{product.category.category_name}}</strong>
                                </div>
                                <div>
                                    Precio: <strong style="color: pink">{{ product.price }}  pesos mexicanos(MXN.)</strong>
                                </div>
                                <div v-if="product.size">
                                    Tamaño: <strong style="color: pink">{{ product.size }}</strong>
                                </div>
                                <div v-if="product.color">
                                    Color: <strong style="color: pink">{{ product.color }}</strong>
                                </div>
                                <div v-if="product.observations">
                                    Detalles: <strong style="color: pink">{{ product.observations }}</strong>
                                </div>
                            </v-card-subtitle>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn block color="teal accent-2" rounded plain target="_blank" :href="product.url_post">
                                <v-icon>mdi-instagram</v-icon>
                                Ver en Instagram
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-row>
            </v-container>
        </v-main>
        <footer-component />
    </v-app>
</template>

<script>
import FooterComponent from '../FooterComponent.vue';
import NavigationComponent from '../NavigationComponent.vue';
export default {
    components: {
        NavigationComponent,
        FooterComponent
    },
    data() {
        return {
            product_id: this.$route.params.id
        }
    },
    created() {},
    mounted() {},
    computed: {
        product() {
            return this.$store.state.products.find(item => item.id == this.product_id)
        }
    }
}
</script>

<style>

</style>