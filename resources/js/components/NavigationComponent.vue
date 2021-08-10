<template>
    <div>
        <v-navigation-drawer app class="deep-purple accent-4" style="background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
                            " permanent expand-on-hover>
            <v-list st dense>
                <router-link :to="{path: '/index/lastupdates'}">
                    <v-list-item link @click="getLastProducts">
                        <v-list-item-icon>
                            <v-icon>mdi-autorenew</v-icon>
                        </v-list-item-icon>
    
                        <v-list-item-content>
                            <v-list-item-title>Últimas actualizaciones</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link :to="{path: '/index/clothing'}">
                    <v-list-item @click="getProducts">
                        <v-list-item-icon>
                            <v-icon>mdi-dresser</v-icon>
                        </v-list-item-icon>
    
                        <v-list-item-content>
                            <v-list-item-title>Ropa</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link :to="{path: '/index/plants'}">
    
                    <v-list-item link @click="getPlants">
                        <v-list-item-icon>
                            <v-icon>mdi-nature</v-icon>
                        </v-list-item-icon>
    
                        <v-list-item-content>
                            <v-list-item-title>Plantas</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
            </v-list>
        </v-navigation-drawer>
    
        <v-app-bar app dark>
            <v-icon x-large aria-hidden="false">mdi-alien</v-icon>
            <v-toolbar-title @click="getLastProducts" elevate-on-scroll scroll-target="#body">
                <router-link :to="{path: '/index'}">
                    Marcianazar
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <p class="purple--text accent-4">{{label}}</p>
            <v-spacer></v-spacer>
            <router-link v-if="this.$route.name !== 'login'" :to="{name: 'login'}" exact>
                Login
            </router-link>
            <v-icon>mdi-rocket-launch</v-icon>
            <router-link :to="{name: 'contact'}">
                Contacto
            </router-link>
    
        </v-app-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            group: null,
            drawer: false,
            label: ''
        }
    },
    methods: {
        getLastProducts() {
            console.log('saludos')
            this.$store.dispatch('getLastProducts')
                .then(_ => {}).catch(err => console.log(err))
            this.label = 'Últimas actualizaciones'
            this.drawer = false
        },
        getProducts() {
            this.$store.dispatch('getProducts')
                .then(_ => {}).catch(err => console.log(err))
            this.label = 'Ropa'
            this.drawer = false
        },
        getPlants() {
            this.$store.dispatch('getPlants')
                .then(_ => {}).catch(err => console.log(err))
            this.label = 'Plantas'
            this.drawer = false
        }
    },
    mounted() {
        //this.label = 'Últimas actualizaciones'
    }
}
</script>

<style>

</style>