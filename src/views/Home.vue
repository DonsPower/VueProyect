<template>
  <div class="home">
    <v-banner
    
    elevation=10
    >
    <v-img
      height="100%"
      src="../assets/BanerControlAcceso.png"
    >
    </v-img>
     
    </v-banner>
    <br>
    
    <v-container>
      <h1 class="text-center " >Control de acceso</h1>
    <v-divider></v-divider>
      <v-row mx-auto pa-6>
        <v-col  cols="12" xs="12" md="4">
          <v-card shaped class="mx-auto" elevation="12">
              <v-card-title>Generador de códigos QR</v-card-title>
             <v-card-subtitle class="pb-0">Actividad 1</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>Mediante la informacion que proporcione el usuario se generara un codigo QR</div>
              <div>Se utilizo vuetify para crear la interface</div>
            </v-card-text>

            </v-card>
        </v-col>
         <v-col xs="12" md="4" >
          <v-card shaped class="mx-auto" elevation="12">
              <v-card-title>Informacion Covid-19</v-card-title>
             <v-card-subtitle class="pb-0">Actividad 2</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>Se obtuvierón datos de Covid-19 En el país de México</div>
              <div>Se utilizo axios para recabar la informacion de las api</div>
            </v-card-text>

            </v-card>
        </v-col>
      </v-row>
    </v-container>  
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

<style lang="stylus">

</style>