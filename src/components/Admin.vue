<template>
  <ApolloMutation
    :mutation="require('../graphql/UpdatePlayer.gql')"
    :variables="{
      id,
      name,
      position,
      dob,
      nationality,
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
            <v-text-field v-model="name" label="Course name" required filled></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-textarea v-model="position" label="Player Position" rows="4" filled clearable></v-textarea>
          </v-col>
        </v-row>
        <v-row >
          <v-col cols="12" md="5">
          <v-text-field v-model="dob" filled label="Date of Birth"></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
          <v-text-field v-model="nationality" filled label="Player Nationality"></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
          <v-text-field v-model="jerseyNumber" filled label="Club Jersey Number"></v-text-field>
          </v-col>
          <!-- <v-col cols="12" md="5">
          <v-select :items="jerseyNumber" v-model="termsOffered" filled multiple label="Player Club Jersey Number"></v-select>
          </v-col> -->
        </v-row>
        <v-btn large color="secondary" :disabled="loading" @click="returnHome">Cancel</v-btn>
        <v-btn large color="primary" :disabled="loading" @click="mutate()">Save</v-btn>
        <p v-if="error">An error occurred: {{ error }}</p>
      </v-container>
    </v-form>
  </template>
  </ApolloMutation>
</template>

<script>
export default {
  data: function() {
    return {
      id: this.$store.getters.currentEditablePlayer.id,
      name: this.$store.getters.currentEditablePlayer.name,
      position: this.$store.getters.currentEditablePlayer.position,
      dob: this.$store.getters.currentEditablePlayer.dob,
      nationality: this.$store.getters.currentEditablePlayer.nationality,
      jerseyNumber: this.$store.getters.currentEditablePlayer.jerseyNumber
    }
  },
  methods: {
    onDone() {
      return console.log('Done')
    },
    returnHome() {
      console.log('Going home')
      this.$router.push('/')
    }
  }
}
</script>