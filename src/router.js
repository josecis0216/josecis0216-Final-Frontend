import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import AddPlayer from '../views/AddPlayer.vue'
import Teams from '../views/Teams.vue'
import NewTeam from '../views/NewTeam.vue'
import EditTeam from '../views/EditTeam.vue'

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
            path:'/add-player',
            name: "add-player",
            component: AddPlayer
        },
        {
            path:'/teams',
            name: "teams",
            component: Teams
        },
        {
            path:'/newTeam',
            name: "newTeam",
            component: NewTeam
        },
        {
            path:'/editTeam',
            name: "editTeam",
            component: EditTeam
        },
    ]
})