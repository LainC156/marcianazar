<template>
    <v-app>
        <navigation-component />
        <v-main style="bbackground-color: #D9AFD9;
                                background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);">
            <!-- Provides the application the proper gutter -->
            <v-container>
                <!-- data cards -->
                <v-row dense>
                    <v-card class="mx-auto align-center" height="700" width="700" elevation="24" >
                        <v-img contain src="img/marcianazar_mm_nametag.png">
                            <v-card-title>
                                <v-icon>
                                    mdi-instagram
                                </v-icon>
                                Síguenos en Instagram
                            </v-card-title>
                        </v-img>
                        <v-card-actions>
                            <v-btn block  color="teal accent-2" rounded plain target="_blank" href="https://www.instagram.com/marcianazar_mm/">
                                @marcianazar_mm
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
import FooterComponent from "./FooterComponent.vue"
import NavigationComponent from "./NavigationComponent.vue"

export default {
    components: { FooterComponent, NavigationComponent },
    data() {
        return {
            label: ''
        }
    },
    mounted() {
        this.label = 'Acerca de'
    }
}
</script>

<style>

</style>