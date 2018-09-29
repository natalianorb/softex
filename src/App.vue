<template>
    <v-app>
      <div class="sticky">
        <div class="sticky__fixed">
          <v-toolbar>
            <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn flat><router-link to="/">Home</router-link> </v-btn>
                <v-btn flat><router-link to="/about">About Us</router-link></v-btn>
                <v-btn flat><router-link to="/contact">Contact</router-link></v-btn>
              </v-toolbar-items>
          </v-toolbar>
        </div>  
        <div class="sticky__placeholder">
        </div>    
      </div>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
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
.sticky__fixed {
  position: fixed;
  left: 0; right: 0;
  z-index: 1;
}
.sticky__placeholder {
  padding-top: 64px;
}
</style>
