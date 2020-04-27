# Soccer Player & Teams API

## Project setup
```
yarn install
```
Frontend runs locally on (http://localhost:8080)
### Compiles and hot-reloads for development
```
yarn serve
```
## GraphQL setup
change locations in the terminal to GraphQL-API-Node-Server folder and run the following commands

Set up a new Docker container 
```
npm run launchDocker
```
create a database using postgres inside of the Docker container
```
npm run createDB
```
Generate Prisma to link with graphQL server
```
npm run generate
```
create the prisma instance containing all the graphql schema data
```
npm run seed
```
Opens browser to prisma playground where data can be seen
```
npm run dev
```
Launch the graphql server to be accessed by the vue frontend of this project
```
npm start
```
GraphQL server runs locally on (http://localhost:4000)
Contains the Player information

## REST API setup
change locations into the RESTful-CRUD folder and run the commands

Start the server for the RESTful API
```
npm run serve
```
REST API server runs locally on (http://localhost:8000)
Contains the Teams information

### Effectively use conditional logic, JavaScript array methods, and front-end framework elements to render large lists on the web client.
[Players](https://github.com/josecis0216/josecis0216-Final-Frontend/blob/master/src/components/Home.vue)
### Work with the proper tools (e.g. VueJS, React) to create and manage the front-end portion of your project within a real development toolset.
[josecis0216-Final-Frontend](https://github.com/josecis0216/josecis0216-Final-Frontend)
### Work with NPM and NodeJS to create and manage the back-end portion of your project.
[GraphQL](https://github.com/josecis0216/GraphQL-API-Node-Server)
[REST API](https://github.com/josecis0216/RESTful-CRUD)
### "Seed" script provides way to populate the datastore after the Docker install and launch.
[GraphQL](https://github.com/josecis0216/GraphQL-API-Node-Server/blob/master/prisma/seed.js)
### Properly use Git for your source version control with an established record of at least 4 days of commits each week from February 19th through April 27th.
[GitHub Profile](github.com/josecis0216)

### Present a User Interface route or "page" that allows the user to: 
#### CREATE a meaningful (at least 5 data fields) resource through a REST endpoint that is stored in the datastore
[CREATE](https://github.com/josecis0216/josecis0216-Final-Frontend/blob/master/src/components/NewTeam.vue)
#### Read or GET meaningful data from 3 different REST endpoints
[READ](https://github.com/josecis0216/josecis0216-Final-Frontend/blob/master/src/components/Teams.vue)
#### UPDATE at least 1 portion of meaningful data through the appropriate endpoint
[UPDATE](https://github.com/josecis0216/josecis0216-Final-Frontend/blob/master/src/components/EditTeam.vue)
#### DELETE some resource via the proper endpoint
[DELETE](https://github.com/josecis0216/josecis0216-Final-Frontend/blob/master/src/components/Teams.vue)
in the metods at the bottom
### Present a separate User Interface route or "page" that allows the user to:
#### CREATE a meaningful (at least 5 data fields) resource through a GraphQL endpoint that is stored in the datastore
[CREATE](https://github.com/josecis0216/josecis0216-Final-Frontend/blob/master/src/components/AddPlayer.vue)
#### Read or GET meaningful data from with at least 3 different query options from the GraphQL endpoint.
[READ](https://github.com/josecis0216/josecis0216-Final-Frontend/blob/master/src/components/Home.vue)
#### UPDATE at least 1 portion of meaningful data through an appropriate GraphQL mutation.
[UPDATE](https://github.com/josecis0216/josecis0216-Final-Frontend/blob/master/src/components/Home.vue)
in the methods at the bottom 
#### DELETE some resource using a proper GraphQL mutation.
[DELETE](https://github.com/josecis0216/josecis0216-Final-Frontend/blob/master/src/components/Home.vue)
in the methods at the bottom
### You will submit the GitHub URL for your project with a detailed ReadMe explaining how to install and run your server(s) on Docker
[Final-Frontend](github.com/josecis0216/Final-Frontend)
[GraphQL](github.com/josecis0216/GraphQL-API-Node-Server)
[RESTful API](github.com/josecis0216/RESTful-CRUD)