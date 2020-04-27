<template>
  <ApolloMutation
    :mutation="require('../graphql/AddPlayer.gql')"
    :variables="{
      name,
      position,
      dob,
      nationality,
      currentTeam,
      jerseyNumber,
      }"
    @done="onDone"
  >
    <template v-slot="{ mutate, loading, error }">
      <!-- Form here -->
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field v-model="name" label="Player name" required filled></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12">
              <v-textarea v-model="position" label="Player Position" rows="4" filled clearable></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="5">
              <v-text-field v-model="dob" filled label="Date of Birth"></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-text-field v-model="nationality" filled label="Player Nationality"></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-text-field v-model="jerseyNumber" filled label="Club Jersey Number"></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-text-field v-model="currentTeam" filled label="Current Club"></v-text-field>
            </v-col>
          </v-row>
          <v-btn large color="secondary" :disabled="loading" @click="returnHome">Cancel</v-btn>
          <v-btn large color="primary" :disabled="loading" @click="mutate()">Add Player</v-btn>
          <v-alert
          v-if="alert"
          v-model="alert"
          dismissible
          type="success">
            Successfully created Player
          </v-alert>
          <p v-if="error">An error occurred: {{ error }}</p>
        </v-container>
      </v-form>
    </template>
  </ApolloMutation>
</template>

<script>
    export default {
        data: function(){
            return {
                name: '',
                position: '',
                dob: '',
                nationality: '',
                currentTeam: '',
                jerseyNumber: '',
                alert: false,
            }
        },
        methods: {
            onDone() {
                console.log('Done')
                this.alert = true;
            },
            returnHome() {
                console.log('Going Home')
                this.$router.push('/');
            }
        }
    }
</script>

