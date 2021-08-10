<template>
    <v-app>
        <navigation-component />
        <v-main style="background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);">
            <!-- Provides the application the proper gutter -->
            <v-container>
                <!-- data cards -->
                <v-row dense>
                    <router-link exact :to="{path: '/index/lastupdates'}">ultimas actualizaciones</router-link>
                    <router-link :to="{path: '/index/clothing'}">ultimas actualizaciones</router-link>
                    <router-link :to="{path: '/index/plants'}">ultimas actualizaciones</router-link>
                    <router-view></router-view>
                </v-row>
                <!-- router view to display childrens -->
            </v-container>
        </v-main>
        <footer-component />
    </v-app>
</template>

<script>
import NavigationComponent from '../NavigationComponent.vue';
import FooterComponent from '../FooterComponent.vue';
export default {
    components: {
        NavigationComponent,
        FooterComponent
    },
    data() {
        return {
            drawer: false,
            group: null,
        }
    },
    methods: {},
    mounted() {},
    computed: {
        products() {
            return this.$store.state.products
        }
    }
}
</script>

<style>

</style>