<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Teams from Restful API</h1>
      </v-col>
      <v-col cols="12">
        <v-btn @click="getData()" class="dataBtn" id="getDataBtn">Get Teams</v-btn>
      </v-col>
      <v-col cols="4" v-for="(item, i) in teams" :key="i">
        <v-card class="mx-auto" max-width="350">
          <v-card-text>
            <v-card-title primary-title><h3>{{ item.name }}</h3></v-card-title>
            <v-card-title><h5>Trophies: {{ item.trophies }}</h5></v-card-title>
            <div><img :src="item.image" style="width: 250px; height: 200px;"></div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="cyan" fab small dark @click="editTeam(item)"><v-icon dark>{{ icons.mdiPencil }}</v-icon></v-btn>
            <v-btn color="error"  fab small dark @click="deleteTeam(item, item._id)"><v-icon dark>{{ icons.mdiDelete }}</v-icon></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
          <v-btn @click="getFavTeam()">Get Favorite Team</v-btn>
      </v-col>
      <v-col cols="12" v-model="team">
        <v-card max-width="350">
          <v-card-text>
            <div>{{ team.name }}</div>
            <div>{{ team.trophies }}</div>
            <div><img :src="team.image" style="width: 250px; height: 200px;"></div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
  } from '@mdi/js'

export default {
  data: () => ({
    icons: {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
    },
    teams: [],
    team: "",
  }),
  methods: {
    createTeam() {
        this.axios.post('http://localhost:8000/player/postFavTeam', {
            name: this.team.name,
            trophies: this.team.trophies,
            image: this.team.image
            })
            .then(function (response) {
                this.output = response.data;
            })
            .catch(function (error) {
                this.output = error;
            });
    },
    getData() {
      return axios
        .get("http://localhost:8000/player/teams")
        .then(response => {
          console.log(response);
          this.teams = response.data.teams;
          console.log(this.teams);
        })
        .catch(error => console.log(error));
    },
    getFavTeam() {
      return axios
        .get("http://localhost:8000/player/favTeam/5ea5de250bb9151f6ce381bb")
        .then(response => {
          console.log(response);
          this.team = response.data.team;
          console.log(this.team);
        })
        .catch(error => console.log(error));
    },
    editTeam(team) {
        console.log(team)
        this.$store.dispatch('editTeam', team)
        this.$router.push('/editTeam')
    },
    deleteTeam(teams, id) {
        axios.delete('http://localhost:8000/player/team/' +id)
        .then(response => {
            this.teams.splice(id, 1)
            console.log(response)
        })
        .catch(error => console.log(error));
    },
    returnHome() {
      console.log("Going home");
      this.$router.push("/");
    }
  }
};
</script>