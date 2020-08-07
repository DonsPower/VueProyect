<template>
    <div>
        <v-app-bar 
        app       
        hide-on-scroll
        dense
        color="teal"
        dark
        >
            <v-app-bar-nav-icon  v-if="drawer==false " @click=" drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>DonsCorp</v-toolbar-title>
             <v-spacer></v-spacer>
            <v-card
            color="teal"
            outlined
            
            >
              <v-text-field
              hide-details
              single-line
              class="sm-auto"
              prepend-icon="mdi-magnify"
            ></v-text-field>
            </v-card>
            
        </v-app-bar>

         <v-navigation-drawer
             app
            v-model="drawer"  
            color="teal"
            dark
            
         >
            <v-card 
                
                class="sm-auto"
                max-width="300"
                color="teal"
            > 
        <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title >Juan Donas</v-list-item-title>
            </v-list-item-content>
            
            <v-btn class="ma-2" text icon color="blue lighten-5" @click="drawer=false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
            </v-list-item>  
            </v-card>
            <v-list-item v-for="i in item" :key="i.text" router :to="i.route">
            <v-list-item-action>
                <v-icon >{{i.icon}}</v-icon>
            </v-list-item-action>
             <v-list-item-content>
                <v-list-item-title >{{i.text}}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>

        </v-navigation-drawer>
    </div>
</template>
<script>

  export default {
    data(){
        return{
            drawer: false,
      item:[
          {icon: 'mdi-home', text: 'Inicio', route: '/'},
          {icon: 'mdi-clipboard-text-outline', text: 'Proyectos', route: '/about'},
          {icon: 'mdi-clipboard-text-outline', text: 'Generador codigos QR', route: '/api'},
          {icon: 'mdi-clipboard-text-outline', text: 'Información Covid-19', route: '/faceapi'}
      ],
      subitem:[
        {text: 'Prueba', items: [
                                  {title: 'Breakfast & brunch'} ],
        }
      ]
        }
    }
  }
</script>