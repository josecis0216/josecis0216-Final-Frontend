import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Player from '../views/Player.vue'
import Teams from '../views/Teams.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { 
            path: '/',
            name: "home",
            component: Home
        },
        {
            path: '/admin',
            name: "admin",
            component: Admin
        },
        {
            path:'/players',
            name: "players",
            component: Player
        },
        {
            path:'/teams',
            name: "teams",
            component: Teams
        }
    ]
})