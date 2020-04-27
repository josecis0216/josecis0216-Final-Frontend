<template>
  <!-- Apollo watched Graphql query -->
  <ApolloQuery :query="require('../graphql/AllPlayers.gql')">
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occured</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
        <v-row>
          <v-col cols="4" v-for="(item, i) in data.Players" :key="i">
            <v-card class="mx-auto" max-width="350">
              <v-card-text>
                <v-card-title><h3>{{ item.name }}</h3></v-card-title>
                <p class="jerseyNumber">{{ item.jerseyNumber }}</p>
                <p>{{ item.position }}</p>
                <div class="text--primary">
                  Nationality: {{ item.nationality}}
                  <br />
                  {{ item.dob }}
                  <br />
                  Club: {{ item.currentTeam }}
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="cyan" fab small dark @click="editPlayer(item)"><v-icon dark>{{ icons.mdiPencil }}</v-icon></v-btn>
                <v-btn color="error"  fab small dark @click="deletePlayer(item)"><v-icon dark>{{ icons.mdiDelete }}</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <v-alert
          v-if="alert"
          v-model="alert"
          dismissible
          type="error">
            Successfully deleted player, refresh page. 
      </v-alert>
      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
</template>

<script>
//import vue-truncate-filter from 'vue-truncate-filter'
import gql from 'graphql-tag'
import {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
  } from '@mdi/js'

const deletePlayer = gql`
   mutation deleteOnePlayer($id: String!) {
     deleteOnePlayer(where: { id: $id }) {
       id
     }
   }
 `;

export default {
  name: "players",

  data: () => ({
    icons: {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
    },
    searchString: "Roma",
    alert: false,
  }),
  methods: {
    editPlayer(player) {
      this.$store.dispatch("editPlayer", player);
      this.$router.push("/admin");
    },
    deletePlayer: function(player) {
    // delete player from db
    this.$apollo.mutate({
      mutation: deletePlayer,
      variables: {
        id: player.id,
        }
      });
      this.alert = true;
    }
  }
};
</script>

<style scoped>
.result {
  padding: 1rem;
}

.jerseyNumber {
  font-size: 1.25rem;
  font-weight: 600;
}
</style>
