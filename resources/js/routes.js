export default [
    { path: '/', redirect: '/index' },
    {
        path: '/index',
        component: () => import('./components/Products/IndexComponent.vue'),
        children: [
            {
                path: 'lastupdates',
                component: () => import('./components/Products/ProductComponent.vue')
            },
            {
                path: 'clothing',
                component: () => import('./components/Products/ProductComponent.vue')
            },
            {
                path: 'plants',
                component: () => import('./components/Products/ProductComponent.vue')
            }
        ]
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('./components/ContactComponent.vue')
    },
    {
        path: '/details/:id',
        name: 'details',
        component: () => import('./components/Products/DetailsComponent.vue'),
        props: true
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./components/LoginComponent.vue')
    }
]