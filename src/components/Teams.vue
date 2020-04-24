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
            <v-btn color="primary" fab x-small dark @click="editTeam(item)">Edit</v-btn>
            <v-btn color="danger" fab x-small dark @click="deleteTeam(item)">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-btn @click="getFavTeam()">Get Favorite Team</v-btn>
        <div>{{ team.name }}</div>
        <div>{{ team.trophies }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
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
    }
  }
};
</script>