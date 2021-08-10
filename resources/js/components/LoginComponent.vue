<template>
    <v-app>
        <navigation-component />
        <v-main style="background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);">
            <!-- Provides the application the proper gutter -->
            <v-container>
                <!-- data cards -->
                <v-row dense>
                  saludos desde el login
                </v-row>
            </v-container>
        </v-main>
        <footer-component />
    </v-app>
</template>

<script>
import FooterComponent from './FooterComponent.vue'
import NavigationComponent from './NavigationComponent.vue';
export default {
    components: { FooterComponent, NavigationComponent },
    mounted() {
        console.log('saludos')
    }
}
</script>

<style>

</style>