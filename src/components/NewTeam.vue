<template>
<div>
  <v-row class="style">

<v-card class="mx-auto" width="750">
    <v-form>
      <v-container>
         <v-card-text>
           
            <v-text-field v-model="name" label="Name" required filled>{{ name }}</v-text-field>
            <v-text-field v-model="trophies" label="Trophies" required filled>{{ trophies }}</v-text-field>
            <v-text-field v-model="image" label="Image URL" filled>{{ image }}</v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn large color="green white--text" @click="newTeam">Create Team</v-btn>
                <v-btn large color="red white--text"  @click="returnHome">Cancel </v-btn>
        </v-card-actions>
        <v-alert
          v-if="alert"
          v-model="alert"
          dismissible
          type="success">
            Successfully created Team
          </v-alert>
      </v-container>
    </v-form>
    </v-card>
  </v-row>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  data: function() {
    return {
      name: '',
      trophies: '',
      image: '',
      alert: false,
    }
  },
  
  methods: {
   
    newTeam() {
      const url = `http://localhost:8000/player/postFavTeam`
      const data = {
        name: this.name,
        trophies: this.trophies,
        image: this.image,
      }
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url,
      }
      console.log(data)
      console.log(url)
      return axios(options)
      .then(response => {
        console.log(response.data)
        this.alert = true
      })
      .catch(error => console.log(error)) 
      },
    returnHome() {
      this.$router.push('/teams')
    },
  },
}
</script>

<style scoped>
.styling{
  display: flex;
  justify-content: space-evenly;
}
</style>