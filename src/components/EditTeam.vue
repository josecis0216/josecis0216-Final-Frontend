<template>
<div>
  <v-row class="style">
    <v-card class="mx-auto" width="750">
    <v-form>
      <v-container>
         <v-card-text>
           <p>{{ id }}</p>
            <v-text-field v-model="name" label="Name" required filled>{{ name }}</v-text-field>
            <v-text-field v-model="trophies" label="trophies" required filled>{{ trophies }}</v-text-field>
            <v-text-field v-model="image" label="Image URL" required filled>{{ image }}</v-text-field>   
        </v-card-text>
        <v-card-actions>
            <v-btn large color="black white--text"  @click="updateCard">Update Team</v-btn>
        </v-card-actions>
      </v-container>
    </v-form>
    </v-card>

  </v-row>
  </div>
</template>

<script>
import qs from 'qs'
import axios from 'axios'
export default {
  data: function() {
    return {
      name: this.$store.getters.currentTeam.name,
      trophies: this.$store.getters.currentTeam.trophies,
      image: this.$store.getters.currentTeam.image,
      id: this.$store.getters.currentTeam._id,
    }
  },
  
  methods: {
       updateCard(){
      const url = (`http://localhost:8000/player/team/` + this.id)
      const data = {
        name: this.name,
        trophies: this.trophies,
        image: this.image,
        id: this.id
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
        console.log(response)
            console.log("Updated Team")
      })
      .catch(error => console.log(error)) 
      },
    returnHome() {
      this.$router.push('/teams')
    }
  },
}
</script>

<style scoped>
.styling{
  display: flex;
  justify-content: space-evenly;
}
</style>