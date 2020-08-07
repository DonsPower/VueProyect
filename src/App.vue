<template>
  <v-app>
  <app-bar></app-bar>
  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <app-bot></app-bot>
</v-app>
</template>

<script>
import bar from "@/components/Bar.vue"
import bot from "@/components/Bot.vue"

export default {
  name: 'App',
  components:{
    'app-bar': bar,
    'app-bot': bot 
  },
  data: () => ({
    //
  }),
};
</script>

