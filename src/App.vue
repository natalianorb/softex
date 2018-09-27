<template>
    <v-app>
      <v-toolbar>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat><router-link to="/">Home</router-link> </v-btn>
          <v-btn flat><router-link to="/about">About Us</router-link></v-btn>
          <v-btn flat><router-link to="/contact">Contact</router-link></v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <router-view/>
    </v-app>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
