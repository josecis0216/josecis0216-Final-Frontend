<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Teams from Restful API</h1>
      </v-col>
      <v-col cols="12">
        <v-btn @click="getData()" class="dataBtn" id="getDataBtn">Get Data</v-btn>
      </v-col>
      <v-col cols="4" v-for="(item, i) in teams" :key="i">
        <v-card class="mx-auto" max-width="350">
          <v-card-text>
            <div>{{ item.name }}</div>
            <div>{{ item.trophies }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="cyan" fab small dark @click="editTeam(item._id)"><v-icon dark>{{ icons.mdiPencil }}</v-icon></v-btn>
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
    team: ""
  }),
  methods: {
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
        .get("http://localhost:8000/player/favTeam/5e548c021ee0b00017dc03ea")
        .then(response => {
          console.log(response);
          this.team = response.data.team;
          console.log(this.team);
        })
        .catch(error => console.log(error));
    },
    editTeam(team) {
        return console.log(team)
    },
    deleteTeam(teams, id) {
        axios.delete('http://localhost:8000/player/' + id)
        .then(response => {
            this.teams.splice(teams, 1)
            console.log(response)
        })
        .catch(error => console.log(error));
    }
  }
};
</script>